const router = require('express').Router()

router.get('/', (req, res) => {
    let places = [{
        name: '',
        city: '',
        state: '',
        cuisines: '',
        pic: ''
    }, {
        name: '',
        city: '',
        state: '',
        cuisines: '',
        pic: ''
    }]
    res.render('places/index', { places })
})

module.exports = router