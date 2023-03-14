const express = require('express')

//instanse of the router
const router = express.Router()

//Gets all workouts
router.get('/', (req, res) => {
    res.json({mssg: 'GET all workouts'})
})

//Get a single workout
router.get('/:id', (req, res) =>{
    res.json({mssg: 'GET a single workout'})
})

//

module.exports = router