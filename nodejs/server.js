const express = require('express');
//const router = express.Router();
const { check, validationResult } = require('express-validator');
const { v4: uuidv4 } = require('uuid');
const { upsert, get, eliminate } = require('./db/crudOperations');

const app = express();
app.use(express.json());

app.get('/items', (req, res) => {
	try {
		const db = get();
		db.on('success', dbRes => {
			res.json( dbRes.data['Items'] );
		});
		db.on('error', function(error, dbRes) {
			console.log("DB Error: " + error + "\n Response: " + dbRes);
			res.status(500).send('DB error');
		});
	} catch (err) {
		console.error(err);
		res.status(500).send('Server error');
	}
});

app.post('/items', (req, res) => {
	doUpsert(req, res, 'insert');
});

app.put('/items', (req, res) => {
	doUpsert(req, res);
});

app.delete('/items/:id', (req, res) => {
	try {
		const db = eliminate({ id: req.params.id.toString() } )
		db.on('success', dbRes2 => {
			res.status(200).send('Item deleted!');
		});

		db.on('error', function(error, dbRes) {
			console.log("DB Error: " + error + "\n Response: " + dbRes);
			res.status(500).send('DB error');
		});
	} catch (err) {
		console.error(err);
		res.status(500).send('Server error');		
	}
});

const doUpsert = (req, res, type = 'update') => {
	try {
		let item = req.body;
		if (item['name'] === null || item['name'] === '') res.status(400).send('Name is required');
		if (type === 'insert') item['id'] = uuidv4();
		if (item['image'] === null || item['image'] === '')
			item['image'] = 'https://icon-icons.com/downloadimage.php?id=111208&root=1678/PNG/512/&file=wondicon-ui-free-parcel_111208.png' ;
		
		if (item['description'] === null || item['description'] === '')
			item['description'] = 'Add an item description';

		const db = upsert(item);

		db.on('success', dbRes2 => {
			res.status(200).send('Item upserted!');
		});

		db.on('error', function(error, dbRes) {
			console.log("DB Error: " + error + "\n Response: " + dbRes);
			res.status(500).send('DB error');
		});
		
	} catch (err) {
		console.error(err);
		res.status(500).send('Server error');
	}
};


// Production static assets
if(process.env.NODE_ENV === 'production') {
	app.use(express.static('../client/build'));

	app.get('*', (req, res) => 
		res.sendFile(path.resolve(_dirname, '..', 'client', 'build', 'index.html'))
	);
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));