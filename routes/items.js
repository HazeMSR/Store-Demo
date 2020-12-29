const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');
const { upsert, get, eliminate } = require('../db/crudOperations');

// @route   GET api/items
// @desc    Get all items
// @access  Private
router.get('/', auth, async (req, res) => {
	try {
		const db = await get();
		//console.log('GET: ',db['Items']);
		res.json( db['Items'] );
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
            return res.status(400).json({ errors: errors.array() });
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
        console.log('DELETE: ',db);
        res.send('Contact removed' );
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
        console.log('UPSERT: ', db);

        /*
		db.on('success', dbRes2 => {
			res.status(200).send('Item upserted!');
		});

		db.on('error', function(error, dbRes) {
			console.log("DB Error: " + error + "\n Response: " + dbRes);
			res.status(500).send('DB error');
		});
		*/  
	} catch (err) {
		console.error(err);
		res.status(500).send('Server error');
	}
};

module.exports = router;