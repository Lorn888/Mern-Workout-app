const express = require ('express')

//express app
const app = express()

app.get('/', (req, res) =>{
    res.json({mssg: 'Welcome to the app'})
})


//listen for request
app.listen(7000, () =>{
    console.log('listening on port 7000')
})
