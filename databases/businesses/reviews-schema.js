import mongoose from 'mongoose';

const business_reviews_schema = mongoose.Schema({
  user_id: String,
  first_name: String,
  last_name: String,
  business_id: String,
  review: String
}, {collection: 'business_reviews'});

export default business_reviews_schema;