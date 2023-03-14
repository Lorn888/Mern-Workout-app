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

//POST a new workout
router.post('/', (req, res) => {
    res.json({mssg:'POST new workout'})
})

//DELETE a workout
router.delete('/:id', (req, res) => {
    res.json({mssg:'DELETE a  workout'})
})

//UPDATE a workout
router.patch('/:id', (req, res) => {
    res.json({mssg:'UPDATE a workout'})
})

module.exports = router