import hash from 'password-hash';

import config from '../common/config';
import validateInputs from '../middlewares/inputsValidation';

import User from '../models/user';

const route = require('express').Router();

// Registration new user
route.post('/sign-up', (req, res) => {
    const { isValid, errors } = validateInputs(req.body);

    if(isValid) {
        return User.findOne({ username: req.body.username})
            .then(user => {
                if(user) {
                    throw new Error('User is already exist');
                } else {
                    return new User({
                        username: req.body.username,
                        password: hash.generate(req.body.password)
                    }).save()
                        .then(user => {
                            req.session[config.session.fieldToSaveSession] = user._id;
                            req.session.save();
                            res.json({ id: user._id});
                        })
                }
            })
            .catch(err => res.status(500).json({ errors: { globalError: err.message }}))
    } else {
        res.status(400).json({ errors })
    }
});

//Login user
route.post('/login', (req, res) => {
    const { isValid, errors } = validateInputs(req.body);

    if(isValid) {
        return User.findOne({ username: req.body.username})
            .then(user => {
                if(user && hash.verify(req.body.password, user.password)) {
                    req.session[config.session.fieldToSaveSession] = user._id;
                    req.session.save();
                    res.json({ id: user._id});
                } else if(!user) {
                    throw new Error('User is not exist');
                } else {
                    throw new Error('Password is incorrect')
                }
            })
            .catch(err => res.status(500).json({ errors: { globalError: err.message }}))
    } else {
        res.status(400).json({ errors })
    }
});

export default route;
