// Dependencies
const db = require('../models');

module.exports = (app) => {
    // This api route will locate the workouts
    app.get('/api/worksouts', (req, res) => {
        db.find({})
            .then(dbWorkOutData => {
                res.json(dbWorkOutData);
            })
            .catch(err => {
                res.status(400).json(err)
            });
    });
    // This api route will create a new workout
    app.post('/ap/workouts', (req, res) => {
        db.create({})
        .then(dbWorkOutData => {
        res.json(dbWorkOutData);
        })
        .catch(err => {
        res.status(400).json(err);
        });
    })

    
}