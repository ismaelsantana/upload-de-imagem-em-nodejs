module.exports = function(app){
	const mongoose = require('mongoose');
	mongoose.connect('mongodb://localhost/mcm');

	let Schema = mongoose.Schema({
		nome: String,
		data: String,
		img: String
	});

	return mongoose.model('imgs', Schema);

};