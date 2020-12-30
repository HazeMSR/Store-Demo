const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { v4: uuidv4 } = require('uuid');
const { check, validationResult } = require('express-validator');
const { upsert, get, eliminate, find } = require('../db/crudOperations');

// @route   GET api/items
// @desc    Get all items
// @access  Private
router.get('/', auth, async (req, res) => {
	try {
		const db = await get();
		if(db.error) res.status(400).send('DB error');
		else{
			res.json( db['Items'] );
		}
	} catch (err) {
		console.error(err);
		res.status(500).send('Server error');
	}
});

// @route   POST api/items
// @desc    Add new item
// @access  Private
router.post('/', [ 
    auth, [
        check('name', 'Name is required')
            .not()
            .isEmpty()
        ]
    ], async (req, res) =>{
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            return res.status(400).send('Name is required');
        }
        doUpsert(req, res, 'insert');
});

// @route   PUT api/items
// @desc    Update item
// @access  Private
router.put('/', auth, async (req, res) =>{
    doUpsert(req, res);
});

// @route   DELETE api/items
// @desc    Delete item
// @access  Private
router.delete('/:id', auth, async (req, res) =>{
    try {
        const db = await eliminate({ id: req.params.id.toString() });
		if (db.error) res.status(400).send('DB error');
		else {
			res.status(200).json({ id: req.params.id });
		}
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

const doUpsert = async (req, res, type = 'update') => {
	try {
		let item = req.body;
		if (item['name'] === null || item['name'] === '') res.status(400).send('Name is required');
		if (type === 'insert') item['id'] = uuidv4();
		if (item['image'] === null || item['image'] === '')
			item['image'] = 'https://icon-icons.com/downloadimage.php?id=111208&root=1678/PNG/512/&file=wondicon-ui-free-parcel_111208.png' ;
		
		if (item['description'] === null || item['description'] === '')
			item['description'] = 'Add an item description';

		const db = await upsert(item);
		if (db.error) res.status(400).send('DB error');
		else {
			res.status(200).json(item);
		}
	} catch (err) {
		console.error(err);
		res.status(500).send('Server error');
	}
};

module.exports = router;