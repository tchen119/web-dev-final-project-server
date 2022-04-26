import mongoose from 'mongoose';

const schema = mongoose.Schema({
  user_id: String,
  firstName: String,
  lastName: String,
  deletedReviews: [{
    user_id: String,
    first_name: String,
    last_name: String,
    business_id: String,
    business_name: String,
    review: String
  }],
  updatedReviews: [{
    user_id: String,
    first_name: String,
    last_name: String,
    business_id: String,
    business_name: String,
    old_review: String,
    new_review: String
  }]
}, {collection: 'admin'});

export default schema;