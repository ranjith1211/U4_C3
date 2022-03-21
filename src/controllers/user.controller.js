const express = require('express');

const router = express.Router();

const upload = require('../middleware/uploads');

const User = require('../models/user.model');

const { body, validationResult } = require('express-validator');

router.post(
	'',
	upload.single('profileImage'),
	body('firstName')
		.trim()
		.not()
		.isEmpty()
		.withMessage('firstName should not be empty')
		.isLength({ mid: 3 }, { max: 30 })
	    .withMessage('firstName should be between 3 to 30'),
	body('lastName')
		.trim()
		.not()
		.isEmpty()
	    
		.isLength({ mid: 3 }, { max: 30 }),
	body('age')
		.not()
		.isEmpty()
		.custom((value) => {
			if (value < 1 || value > 150) {
				throw new Error('age should be between 1 and 150');
			}
			return true;
		}),
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		try {
			let user = await User.findOne({ email: req.body.email });

			if (user) {
				return res.status(400).send('email is already exist');
			}

			user = await User.create({
				firstName: req.body.firstName,
				age: req.body.age,
				email: req.body.email,
				profileImage: req.file.path,
			});

			res.status(200).send(user);
		} catch (error) {
			return res.status(500).send({ error: error.message });
		}
	},
);

const login = router.post('', async (req, res) => {
	try {
		const user = await User.findOne({ email: req.body.email });

		if (!user) {
			return res.send('email or password are incorrect');
		}

		return res.send('successfully login');
	} catch (error) {
		return res.send({ error: error.message });
	}
});

module.exports = router;

module.exports = login;
