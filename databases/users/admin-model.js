import mongoose from 'mongoose';
import schema from './admin-schema.js';

const adminModel = mongoose.model('AdminModel', schema);

export default adminModel;