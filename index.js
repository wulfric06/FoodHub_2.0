const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

// add chalk and validator 

require('dotenv').config();
const routesApi = require('./src/api');

const app = express();

// validator

app.use(morgan(':method :url :status :user-agent - :response-time ms'));
app.use(cors());
app.use(bodyParser.json({ limit: '50mb'}));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true}));

app.use('/static', express.static('static'));
app.use('/api', routesApi);


app.get('*', (_, res) => res.status(200).json({message: 'App is running well..!'}));
app.listen(process.env.PORT, () => {
    // chalk.info(`App is running on http://localhost:${process.env.PORT}`);
    console.log(`App is running on http://localhost:${process.env.PORT}`);
})