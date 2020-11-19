function guest(req, res, next){
    if(!req.isAuthenticated()){
        return next()
    }
    return res.redirect('/')
}
// is function ka kaam ye h ki jiase hm already llogged in h agr then hm url pe login ka url ka url
//ya reister ka url open krke na jaa ske uspe
// ye usko home pe hi rehne dega

module.exports = guest