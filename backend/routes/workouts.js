const express = require('express')

//instanse of the router
const router = express.Router()

//Gets all workouts
router.get('/', (req, res) => {
    res.json({mssg: 'GET all workouts'})
})

module.exports = router