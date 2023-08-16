const router = require('express').Router()

router.get('/', (req, res) => {
    res.send('GET /athletes')
})

module.exports = router
