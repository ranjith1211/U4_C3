const mongoose = require('mongoose');

const publicationSchema = mongoose.Schema(
	{
		Name: { type: String, require: true },
		bookId: { type: mongoose.Schema.Types.ObjectId, require: true },
	},
	{
		timestamps: true,
		versionkey: false,
	},
);

module.exports = mongoose.model('publication', publicationSchema);
