const mongoose = require('mongoose')
const UserSchema = new mongoose.Schema(
	{
		foto: {
			type: String,
			required: true,
		},
		nombre: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
		},
		password: {
			type: String,

		},
		
	},
	{ timestamps: true }
);

const User = mongoose.model('User', UserSchema);

module.exports = User;