const mongoose = require('mongoose')


const connection = () => {
    mongoose.set('strictQuery', true)
    mongoose.connect(process.env.DB_CONNECT , {
        useNewUrlParser : true
    })
    .then(() => {
        console.log("Successfuly Connected to DataBase !");
    })
    .catch((err) => {
        console.log("DataBase Connection Failed ...")
        console.log(err)
        process.exit(1)
    })
}

module.exports = connection;