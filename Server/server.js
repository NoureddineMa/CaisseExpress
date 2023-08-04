const express = require('express')
const app = express()
require('dotenv').config()
const cors = require('cors')
const AuthRouter = require('./Routers/authRouter')
const initDb = require('./Config/initDb')

// swagger 
const swaggerJSDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')

const options = {
    definition : {
        openapi : '3.0.0',
        info : {
            title : 'CaisseExpress Project V1.0',
            version : '1.0.0'
        },
        servers : [
            {
              url:  'http://localhost:4000'
            }
        ]
    },
    apis : ['./server.js']
}

const swaggerSpec = swaggerJSDoc(options)
app.use('/api/docs',swaggerUi.serve , swaggerUi.setup(swaggerSpec) )


// connection DB  :
initDb();

const PORT = process.env.PORT_APP || 5000

app.use(cors({credentials: true,}))
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/api/auth',AuthRouter)

app.listen(PORT , () => {
    console.log(`Server Running Under PORT :${PORT}`);
})

