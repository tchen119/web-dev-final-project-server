import mongoose from 'mongoose';
import business_likes_schema from './likes-schema.js';

const likesModel = mongoose.model('LikesModel', business_likes_schema);

export default likesModel;