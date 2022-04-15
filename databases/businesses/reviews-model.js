import mongoose from 'mongoose';
import business_reviews_schema from './reviews-schema.js';

const reviewsModel = mongoose.model('ReviewsModel', business_reviews_schema);

export default reviewsModel;