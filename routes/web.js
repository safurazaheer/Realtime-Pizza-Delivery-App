const authController = require('../app/http/controllers/authController')
const homeController = require('../app/http/controllers/homeController')
const cartController = require('../app/http/controllers/customers/cartController')
const orderController = require('../app/http/controllers/customers/orderController')
const AdminOrderController = require('../app/http/controllers/admin/orderController')
const statusController = require('../app/http/controllers/admin/statusController')

//middlewares
const guest = require('../app/http/middlewares/guest')
const admin = require('../app/http/middlewares/admin')
const auth = require('../app/http/middlewares/auth')
function initRoutes(app){
    
    app.get('/', homeController().index)

    // app.get('/', (req, res)=>{
    //     res.render("home")
    // })
    app.get('/cart', cartController().index)
    app.post('/update-cart', cartController().update)
    app.get('/login',guest,  authController().login)// guest middleware hmne yaha lgadia h 
    app.post('/login', authController().postLogin)
    app.get('/register', guest, authController().register)// guest middleware hmne yaha lgadia h 
    app.post('/register', authController().postRegister)
    app.post('/logout', authController().logout)

    //customer routes
    app.post('/orders', orderController().store)
    app.get('/customer/orders', orderController().index)
    app.get('/customer/orders/:id', orderController().show)//dynamci parameter //jo naam yaha dia h na id ka wahi same hoga controller mebhi

    //Admin routes
    app.get('/admin/orders', AdminOrderController().index)
    app.post('/admin/order/status', statusController().update)
}
``
module.exports = initRoutes