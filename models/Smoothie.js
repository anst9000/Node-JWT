const mongoose = require('mongoose')

const smoothieSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, 'Please enter a smoothie name.'],
		unique: true,
	},
	ingredients: [{
		type: String
	}]
})


const Smoothie = mongoose.model('smoothie', smoothieSchema)
module.exports = Smoothie
