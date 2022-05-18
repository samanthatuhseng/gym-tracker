const router = require('express').Router();
let GymSession = require('../models/gym-session.model.js');

router.route('/').get((req, res) => {
    GymSession.find()
        .then(gymlog => res.json(gymlog))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);

    const newGymSession = new GymSession({
        username,
        description,
        duration,
        date,
    });

    newGymSession.save()
        .then(() => res.json('Gym Session logged!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

//returns a gym log item given an id
router.route('/:id').get((req, res) => {
    GymSession.findById(req.params.id)
        .then(gymsession => res.json(gymsession))
        .catch(err => res.status(400).json('Error: ' + err));
});

//deletes a gym log item given an id
router.route('/:id').delete((req, res) => {
    GymSession.findByIdAndDelete(req.params.id)
        .then(() => res.json('Gym session deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

//save the updated object in the database
router.route('/update/:id').post((req, res) => {
    GymSession.findById(req.params.id)
        .then(gymsession => {
            gymsession.username = req.body.username;
            gymsession.description = req.body.description;
            gymsession.duration = Number(req.body.duration);
            gymsession.date = Date.parse(req.body.date);

            gymsession.save()
                .then(() => res.json('Gym session updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;