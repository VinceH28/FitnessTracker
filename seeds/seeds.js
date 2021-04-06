let mongoose = require("mongoose");
let db = require("../models");

mongoose.connect("mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

let workoutSeed = [
    {
        day: new Date().setDate(new Date().getDate()-10),
        exercises: [
          {
            type: "resistance",
            name: "Bicep Curl",
            duration: 20,
            weight: 100,
            reps: 10,
            sets: 4
          }
        ]
    },

];
