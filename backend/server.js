require('dotenv').config()

const workoutRoutes = require('./routes/workouts')
const express = require ('express')
//express app
const app = express()

//middleware
app.use((req,res,next) => {
    console.log(req.path, req.method)
    next()
})


//listen for request
app.listen(process.env.PORT, () =>{
    console.log('listening on port 7000')
})
