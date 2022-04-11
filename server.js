import express from 'express';
import cors from 'cors';
import yelpController from './controllers/yelp-controller.js';

const app = express();
app.use(express.json());
app.use(cors());

yelpController(app);

app.listen(process.env.PORT || 4000);