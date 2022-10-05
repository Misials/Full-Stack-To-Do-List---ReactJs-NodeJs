const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
	text: {
		type: String,
		required: true,
	},
	created: {
		type: Date,
		required: true,
	},
	isDone: {
		type: Boolean,
		required: true,
	},
});

module.exports = mongoose.model('Task', taskSchema);
