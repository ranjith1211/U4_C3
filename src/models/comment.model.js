const mongoose = require('mongoose');

const commentSchema = mongoose.Schema(
	{
		body: { type: String, require: true },
		bookId: { type: mongoose.Schema.Types.ObjectId, require: true },
		userId: { type: mongoose.Schema.Types.ObjectId, require: true },
	},
	{
		timestamps: true,
		versionkey: false,
	},
);

module.exports = mongoose.model('comment', commentSchema);
