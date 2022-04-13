import mongoose from 'mongoose';

const business_likes_schema = mongoose.Schema({
  user_id: String,
  business_id: String,
  liked: Boolean
}, {collection: 'business_likes'});

const business_reviews_schema = mongoose.Schema({
  user_id: String,
  business_id: String,
  review: String
}, {collection: 'business_reviews'});

export default business_likes_schema;