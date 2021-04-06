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

    //This will locate the most recent 10 workouts
    app.get('/api/workouts/range', (req, res) => {
        db.dbWorkOutData.find({})
        .sort({day: -1})
        .limit(10)
        .then((dbWorkOutData) => {
            re.json(dbWorkOutData);
        })
        .catch((err) => {
            res.json(err);
        });
    });

    // This will put a new workout on the sashboard using its ID
    app.put('/api/worouts/:is', (req, res) => {
        db.dbWorkOutData.findByIdAndUpdate(req.params.id, {
            $push: {exercises: req.body},
        })
        .then((data) => {
            res.json(data);
        })
        .catch((err) => console.log(err));
    })
}