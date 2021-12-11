require('dotenv').config();
const express = require('express');
const app = express();
const peopleRouter = require('./controllers/people');

const sequelize = require('./utils/database');

app.use(express.json());

app.use('/api/people', peopleRouter);

const cors = require('cors');
app.use(cors());

const PORT = 3001;
sequelize.sync().then(() => {
	app.listen(PORT, () => {
		console.log(`Server running on port ${PORT}`);
	});
});
