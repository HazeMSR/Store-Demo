const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { find } = require('../db/crudOperations');
const auth = require('../middleware/auth');
const config = require('config');


// @route   GET /api/auth
// @desc    Get logged in user
// @access  Private
router.get('/', auth, async (req, res) => {
    try {
        console.log('REQ: ',req.user);
		let user = await find( { user: req.user }, 'Users');
        delete user.Item.password;
        res.json(user.Item);
    } catch (err) {
        console.error('GET AUTH ERR: '+err);
        res.status(500).send('Server error');
    }
});


// @route   POST /api/auth
// @desc    Auth user & get token
// @access  Public
router.post('/', [
    check('user', 'User is required').notEmpty(),
    check('password', 'Password is required').exists()
], async(req, res) => {
    const errors = validationResult(req);
	if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
	}
    const { user, password } = req.body;

    try{
        const db = await find( { user: user }, 'Users');
        if(!user) {
            return res.status(400).send('Invalid Credentils');
        }
        const isMatch = await bcrypt.compare(password, db.Item.password);
        if(!isMatch) {
            return res.status(400).send('Invalid Credentials');
        }
        jwt.sign({ user: db.Item.user }, config.get('jwtSecret'), {
            expiresIn: 360000
        }, (err, token) => {
            if(err){ console.error('AUTH ERROR: ', err);throwerr;}
            res.json({ token });
        } );
    } catch (err) {
        console.error('ERROR AUTH: '+err);
        res.status(500).send('Server Error');
    }
});

module.exports = router;