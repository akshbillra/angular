try{
const db  = require('./db'); 
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var usersSchema = db.Schema({
  u_fname: {type:String,required:true,trim:true},
  u_lname: {type:String,required:true,trim:true,maxlength:10},
  u_number: {type:String,required:true,trim:true,maxlength:10},
  u_email:{type:String,required:true,trim:true},
});


// compile schema to model
module.exports = db.model('Users', usersSchema); }
catch(err){
  console.log(err)
}