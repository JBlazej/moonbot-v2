import mongoose from 'mongoose';
const supportedLanguages = [ 'en', 'cs', 'de', 'es' ];
//const supportedURL =['vse', 'ffu', 'fmv', 'fph', 'fis', 'nf', 'fm']

// USERS SCHEMA
// -----------------------------------------------------------------------------
const UserSchema = new mongoose.Schema({
	id: {
		type: String,
		unique: true,
		lowercase: true,
		required: true
	},
	created: {
		type: Date,
		default: Date.now
	},
	station: {
		from: {
			type: String,
			default: 'volha'
		},
		to: {
			type: String,
			default: 'husinecka'
		},
		time: {
			type: Date,
			default: Date.now
		}
	},
	facultie: {
		type: String,
		default: 'vse'
	},
	college: {
		type: String,
		default: 'bla'
	},
	count: {
		type: Number,
		default: 0
	},
	language: {
		type: String,
		enum: supportedLanguages,
		default: 'en'
	}
});

export const User = mongoose.model('User', UserSchema);
