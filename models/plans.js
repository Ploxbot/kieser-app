//IMPORTS
const mongoose = require('mongoose')

//PLANS MODEL

module.exports = mongoose.model('plans', {
	user: {
		type: ObjectId,
		ref: 'users',w
		required: true
	},
	title: {
		type: String,
		required: true
	},
	machines: {
		type: [{
			type: ObjectId,
			ref: 'machines'
		}],
		required: true
	},
})
