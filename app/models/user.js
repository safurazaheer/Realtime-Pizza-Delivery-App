//model ka naam singular h toh table ka naam pulral hoga, eg menus hoga yaha table(collection) ka naam
const mongoose = require('mongoose')
const Schema = mongoose.Schema


const userSchema = new Schema({
    name:{type: String, required : true},
    email:{type: String, required : true, unique:true},
    password:{type: String, required : true},
    role:{type: String,default : 'customer'}
}, {timestamps : true})
 // jo bracket k ander h Menu, wo model ka naam hota h , momgoose 
 //dekhkega model ka naam and uske plural form ka collection create krdega


module.exports = mongoose.model('User', userSchema)


