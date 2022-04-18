import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import yelpController from './controllers/yelp-controller.js';
import businessesController from './controllers/businesses-controller.js';
//import usersController from './controller/users-controller.js';

const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb://localhost:27017/final_project';
mongoose.connect(CONNECTION_STRING);

const app = express();
app.use(express.json());
app.use(cors());

yelpController(app);
businessesController(app);
//usersController(app);

app.listen(process.env.PORT || 4000);