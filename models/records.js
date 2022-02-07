//IMPORTS
const mongoose = require('mongoose')

//RECORDS MODEL

module.exports = mongoose.model('records', {
	title: {
		type: String,
		required: true
	},
	machines: {
		type: [{
			type: ObjectId,
			ref: 'machines'
		}],
	date: {
		type: Date,
		required: true
	},
	duration: {
		type: Number, //DATE/TIME ???
		required: true
	}
})
