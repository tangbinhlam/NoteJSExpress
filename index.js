import express from 'express';
import routes from './src/routes/crmRoutes';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

var swaggerUi = require("swagger-ui-express");
var swaggerDocument = require('./swagger.json');
var router = express.Router();

const app = express();
const PORT = 4000;

// mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/CRMdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// bodyparser setup
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api/v1', router);

routes(app);

// serving static files
app.use(express.static('public'));

app.get('/', (req, res) =>
    res.send(`Node and express server running on port ${PORT}`)
);

app.listen(PORT, () =>
    console.log(`Your server is running on port ${PORT}`)
);
