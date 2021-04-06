// This .js file uses mongoose to create the databse
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
//Cretes a collections in mongoDB
const workoutDataSchema = new Schema({
    // Each collection entry needs the input below:
    day: {
        type: Date,
        defualt: () => new Date(),
    },
    exercises: [
        {
            name: {
                type: string,
                trim: true,
                require: ' You need an exercise name that is valid. ',
            },
            tyoe: { type: String },
            duration: { type: Number },
            weight: { type: Number },
            reps: { type: Number },
            sets: { type: Number },
            distance: { type: Number },
        },
    ]
});

//To use in other places we must create a variable to capture & export it
const workoutData = mongoose.model('Workout', workoutDataSchema);

module.exports = workoutData;