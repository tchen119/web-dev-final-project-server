import mongoose from 'mongoose';

const schema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  admin: Boolean
}, {collection: 'users'});

export default schema;