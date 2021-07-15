const { services } = require('../utils/dataset')
const home = async(req, res) => {
    res.render('pages/index')
}

const request = async(req, res) => {
    const id = req.params.id
    const data = services[id]
    
    res.render('pages/request', {data})
}

module.exports = {
    home, request
}