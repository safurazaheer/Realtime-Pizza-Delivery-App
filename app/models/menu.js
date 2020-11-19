//model ka naam singular h toh table ka naam pulral hoga, eg menus hoga yaha table(collection) ka naam
const mongoose = require('mongoose')
const Schema = mongoose.Schema


const memuSchema = new Schema({
    name:{type: String, required : true},
    image:{type: String, required : true},
    price:{type: Number, required : true},
    size:{type: String, required : true},
})
 // jo bracket k ander h Menu, wo model ka naam hota h , momgoose 
 //dekhkega model ka naam and uske plural form ka collection create krdega
const Menu = mongoose.model('Menu', memuSchema)

module.exports = Menu


