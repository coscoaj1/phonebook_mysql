const peopleRouter = require('express').Router();
const Person = require('../models/Person');

peopleRouter.get('/all', async (req, res) => {
	const people = await Person.findAll();
	console.log(people);
});

peopleRouter.post('/', async (req, res) => {
	const john = await Person.create({
		name: 'john',
		phoneNumber: '828-555-1212',
	});
	console.log('johns auto generated ID:', john.id);
});

module.exports = peopleRouter;
