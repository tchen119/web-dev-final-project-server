import mongoose from 'mongoose';

const schema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  admin: Boolean,
  favorites: [String],
}, {collection: 'users'});

export default schema;