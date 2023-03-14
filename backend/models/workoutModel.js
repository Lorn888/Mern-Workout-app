const mongoose = require('mongoose')

const Schema = mongoose.Schema
const workoutSchema = new Schema ({

    //First argument describes what the document should look like
    title: {
        type: String,
        required : true
    },
    reps: {
        type: Number,
        required: true
    },
    load: {
        type: Number,
        required: true    
    }
}, 
//Second adds a timestamp

{ timestamps: true }) 

module.exports = mongoose.model('Workout', workoutSchema)
