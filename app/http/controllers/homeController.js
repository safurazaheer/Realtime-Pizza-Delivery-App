const Menu = require('../../models/menu')
function homeController(){
    return {
        // index : function(req, res){
        //     // find db se sare records de deti h
        //     //jaise hi data recieve ho jata h then wo function execute ho jata h
        //     //function ke ander jo variable h na, wohi hmara poora data h
        //     //kuch bhi naam de skte h usko hm
        //     Menu.find().then(function(pizzas){
        //         console.log(pizzas)
        //         res.render("home", {pizzas:pizzas})
        //     })
        // }
         index : async function(req, res){
            const pizzas = await Menu.find()
            //console.log(pizzas)
            return res.render("home", {pizzas:pizzas})
        }  // yebhi ek cleaner way h uper wala kaam krne ka async , awiat use krke 
    }
}
module.exports = homeController
