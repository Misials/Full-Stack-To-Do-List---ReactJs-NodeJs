require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const DB = process.env.DATABASE_URI.replace('<password>', process.env.DATABASE_PASSWORD);

app.get('/', (req, res) => {
	res.send('Backend Side');
});

mongoose
	.connect(DB, {
		useNewUrlParser: true,
	})
	.then(() => {
		console.log(`Connected to MongoDB`);
	});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
