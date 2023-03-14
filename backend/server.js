require('dotenv').config()

const workoutRoutes = require('./routes/workouts')
const express = require ('express')
//express app
const app = express()

//middleware    
app.use(express.json())
app.use((req,res,next) => {
    console.log(req.path, req.method)
    next()
})


//routes from the router file
// when we fire a request to this route than get me these qorkoutRoutes
app.use('/api/workouts', workoutRoutes)

//listen for request
app.listen(process.env.PORT, () =>{
    console.log('listening on port 7000')
})
