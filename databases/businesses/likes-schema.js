import mongoose from 'mongoose';

const business_likes_schema = mongoose.Schema({
  user_id: String,
  first_name: String,
  last_name: String,
  business_id: String,
  business_name: String,
  like: Boolean
}, {collection: 'business_likes'});

export default business_likes_schema;