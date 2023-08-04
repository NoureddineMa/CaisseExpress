const RoleModel = require('../Models/roleModel')
const connection = require('./dbConfig')
const bcrypt = require('bcryptjs')
const roles = process.env.ROLES.split(',')


async function initDb(){
    await connection()
    // await createDefaultRoles()
}


// function createDefaultRoles(){
//     RoleModel.countDocuments({}).then(async (err, count) => {
//         if(err){
//             console.log(err);
//             process.exit(1);
//         }
//         if(count === 0){
//             roles.forEach(async (role) => {
//                 const newRole = new RoleModel({ role });
//                 await newRole.save();
//             })
//         }
//     })
// }


module.exports = initDb;