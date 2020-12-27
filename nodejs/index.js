var fs = require('fs');
const db = require('./db/crudOperations');

const items = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));

/*
items.forEach( item => {
	const res = db.upsert(item);
	if(res['response']['error']) console.error(res['response']['error']);
});
*/

db.get();
//db.eliminate({id:3});
//db.update({id:1,name:"USB"});