const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../Models/userModel')
const Roles = require('../Models/roleModel')



// *** *** *** method :post *** *** ***
// @Route :api/auth/login
// *** acces : public ***


const Login = asyncHandler(async(req,res) => {

    const { Email , Password  } = req.body
    
    // in case No email or password
    if(!Email || !Password) {
        res.status(400).json({message: "Please fill all fields"})
        return;
    }

    // check for userEmail : 
    const user = await User.findOne({ Email })

    if(user){
        console.log(user);
        userRole = user._Roles
        const findRoleById = await Roles.findById({ _id : userRole })
        const nameRole = findRoleById.role
     
    
    if(user && (await bcrypt.compare(Password,user.Password))) {
        // create Token :

        const token = jwt.sign({ _id : user._id } , process.env.JWT_SCRET , {
            expiresIn: '12h'
        });
        res.status(200)
           .set('Authorization', `Bearer ${token}`)
           .json({message: "Logged Successfully !",token,user,nameRole})
    } else {
        res.status(400)
           .json({message: " Email Ou Mot de Passe Incorrect ! "})
    }
    } else {
        res.status(400)
        res.json({message: " Email Ou Mot de Passe Incorrect !"})
    }
})


// *** *** *** method :post *** *** ***
// @Route :api/auth/Register
// *** acces : Private ***


const Register = asyncHandler(async(req,res) => {
    const { FullName , Email , Password , Phone_Number , _Roles } = req.body;
    
    if(!FullName || !Email || !Password || !Phone_Number || !_Roles){
        res.status(400)
           .json({message: "please fill all fields !"})
    }

    // check if the user is Already Exist : 
    const userExist = await User.findOne({ Email })
    if(userExist){
        res.status(400)
           .json({message: "please try Another Email !"})
           return;
    }

    // check if the number of User is Already Exist : 
    const PhoneNumberExist = await User.findOne({ Phone_Number })
    if(PhoneNumberExist){
        res.status(400)
        .json({message: "Please Try Another Phone Number "})
        return;
    }

    // hash Password : 
    const salt = await bcrypt.genSalt(10)
    const HashedPassword = await bcrypt.hash(Password,salt)
    // find Roles By Id : 
    const RoleID = await Roles.findOne({ _Roles : req.body._Roles})
    const RoleName = RoleID._id

    // create User : 
    const user = await User.create({
        FullName : FullName,
        Email : Email,
        Password : HashedPassword,
        Phone_Number : Phone_Number,
        _Roles : RoleName
    })

    if(user) {
        res.status(200)
           .json({message: "Account Created Successfully !"})
    }  else {
        res.status(400).json({message: "Error , Pease Try Again !"})
    }
})


module.exports = { Register , Login }
