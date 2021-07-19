const { services } = require('../utils/dataset')
const home = async(req, res) => {
    res.render('pages/index')
}

const request_web = async(req, res) => {
    res.render('pages/request_web')
}

const request_package = async(req, res) => {
    res.render('pages/request_package')
}



const request = async(req, res) => {
    const id = req.params.id 
    console.log(id < 0)

    if (id > services.length || id <= 0) {
        res.render('pages/404')
    } 

    const data = services[id - 1]
    res.render('pages/request', {data})
}

module.exports = {
    home, request, request_web
}