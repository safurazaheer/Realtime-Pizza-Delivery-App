import axios from 'axios'
import Noty from 'noty'
import moment from 'moment'
//const initAdmin = require('./admin')
import initAdmin from './admin.js' 
let addToCart = document.querySelectorAll('.add-to-cart') //saare buttons mil jyenge as an array
let cartCounter = document.querySelector('#cartCounter')
function updateCart(pizza){
   axios.post('/update-cart', pizza).then(res=>{
       //console.log(res)
       cartCounter.innerText = res.data.totalQty
       new Noty({
           type : 'success',
           timeout : 1000,
           progressBar : false,
           text : 'Item added to cart'
       }).show();
   }).catch(err=>{
    new Noty({
        type : 'error',
        timeout : 1000,
        progressBar : false,
        text : 'Something went wrong'
    }).show();
   })
}
addToCart.forEach((btn)=>{
  btn.addEventListener('click', (e)=>{
      //console.log(e);
      //let pizza = btn.dataset.pizza
      let pizza = JSON.parse(btn.dataset.pizza)
      updateCart(pizza)
      //console.log(pizza)
  })
}) 

//remove alert message after x seconds success
const alertMsg = document.querySelector('#success-alert')
if(alertMsg){
    setTimeout(()=>{
        alertMsg.remove()
    }, 2000)
}


//change order status, jo server se order ecieve hora h, uska status change krna h hme 
let statuses = document.querySelectorAll('.status_line')
let order = document.querySelector('#hiddenInput') ? document.querySelector('#hiddenInput').value : null
order = JSON.parse(order)
let time = document.createElement('small')
function updateStatus(order){
    statuses.forEach((status)=>{
        status.classList.remove('step-completed')
        status.classList.remove('current')
    })
 let stepCompleted = true;
 statuses.forEach((status)=>{
  let dataProp = status.dataset.status
  if(stepCompleted){
      status.classList.add('step-completed')
  }
  if(dataProp === order.status){
    stepCompleted = false
    time.innerText = moment(order.updatedAt).format('hh:mm A')
    status.appendChild(time)
      if(status.nextElementSibling){
        status.nextElementSibling.classList.add('current')
      }
  }
 })
}
updateStatus(order)

//socket
let socket = io()
//join
if(order){
    socket.emit('join', `order_${order._id}`)
}
let adminAreaPath = window.location.pathname//url milta h ise
if(adminAreaPath.includes('admin')) {
    initAdmin(socket)
    socket.emit('join', 'adminRoom')
}

socket.on('orderUpdated', (data)=>{
    const updatedOrder = { ...order }
    updatedOrder.updatedAt = moment().format()
    updatedOrder.status = data.status
    console.log(data)
    updateStatus(updatedOrder)
    new Noty({
        type : 'success',
        timeout : 1000,
        progressBar : false,
        text : 'Order updated'
    }).show();
    
})


