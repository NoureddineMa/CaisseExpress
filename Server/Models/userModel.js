const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    FullName: {
        type: String
    },
    Email : {
        type: String,
        unique: true
    },
    Password : {
        type: String,
        required: true
    },
    Phone_Number : {
        type: String,
        required: true,
        unique : true
    },
    _Roles : [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Role'
        }
    ]
})

module.exports = mongoose.model('User', userSchema)