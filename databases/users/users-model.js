import mongoose from 'mongoose';
import schema from './users-schema.js';

const usersModel = mongoose.model('UsersModel', schema);

export default usersModel;