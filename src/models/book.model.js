const mongoose = require('mongoose');

const bookSchema = mongoose.Schema(
	{
		like: { type: Number, require: true },
		coverImage: [{ type: String, require: false }],
		content: { type: String, require: true },
		userId: { type: mongoose.Schema.Types.ObjectId, require: true },
	},
	{
		timestamps: true,
		versionkey: false,
	},
);

module.exports = mongoose.model('book', bookSchema);
