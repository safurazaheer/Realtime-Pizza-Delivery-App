//model ka naam singular h toh table ka naam pulral hoga, eg menus hoga yaha table(collection) ka naam
const mongoose = require('mongoose')
const Schema = mongoose.Schema


const orderSchema = new Schema({
    customerId:{type: mongoose.Schema.Types.ObjectId,
                ref:'User',
                required : true
            },
    items : {type: Object, required: true},
    phone:{type:String, required : true},
    address:{type:String, required : true},        
    paymentType:{type:String, default:'COD'},
    status:{type:String, default: 'order_placed'}, 
}, {timestamps : true})
 // jo bracket k ander h Menu, wo model ka naam hota h , momgoose 
 //dekhkega model ka naam and uske plural form ka collection create krdega


module.exports = mongoose.model('Order', orderSchema)


