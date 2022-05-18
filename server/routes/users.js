const router = require('express').Router();
let User = require('../models/user.model.js');

// endpoint handles incoming HTTP GET requests on the /users/ URL path
router.route('/').get((req, res) => {
    //to get a list of all the users from the database
    User.find()
        //results are returned in JSON format with res.json(users)
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

// handles incoming HTTP POST requests on the /users/add/ URL path.
router.route('/add').post((req, res) => {
    //new username is part of the request bod
    const username = req.body.username;

    // create a new instance of User
    const newUser = new User({ username });

    // new user is saved to the database with the save() method
    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;