const express = require('express')

//instanse of the router
const router = express.Router()

//attatching a handler. When the request comes in it fires up some function 
router.get('/', () => {})

module.exports = router