import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import session from 'express-session';
import yelpController from './controllers/yelp-controller.js';
import businessesController from './controllers/businesses-controller.js';
import usersController from './controllers/users-controller.js';

mongoose.connect('mongodb://localhost:27017/final_project');

const app = express();
app.use(express.json());
app.use(cors({
  credentials: true,
  origin: 'http://localhost:3000'
}));

const sess = {
  secret: 'super secret password', //process.env.sess_secret
  cookie: {}
}

if (app.get('env') === 'production') {
  app.set('trust proxy', 1);
  sess.cookie.secure = true;
}

app.use(session(sess));

yelpController(app);
businessesController(app);
usersController(app);

app.listen(process.env.PORT || 4000);