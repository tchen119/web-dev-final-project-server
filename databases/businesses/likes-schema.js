import mongoose from 'mongoose';

const business_likes_schema = mongoose.Schema({
  user_id: String,
  business_id: String,
  like: Boolean
}, {collection: 'business_likes'});

export default business_likes_schema;