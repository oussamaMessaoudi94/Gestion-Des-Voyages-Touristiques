const mongoose = require ('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const signupSchema = mongoose.Schema ({
    firstName : String,
    lastName : String,
    email : {type : String , unique:true},
    password : String,  
});

signupSchema.plugin(uniqueValidator);

const signup = mongoose.model('signup', signupSchema);

module.exports = signup;