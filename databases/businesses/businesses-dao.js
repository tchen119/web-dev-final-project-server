import likesModel from './likes-model.js';
import reviewsModel from './reviews-model.js'

export const addLike = (like) => likesModel.create(like);

export const removeLike = (user_id, business_id) =>
  likesModel.deleteOne({user_id: user_id, business_id: business_id});

export const findLike = (user_id, business_id) =>
  likesModel.find({user_id: user_id, business_id: business_id});

export const findAllLikes = (user_id, business_id) =>
  likesModel.find();

export const updateLike = (user_id, business_id, like) =>
  likesModel.updateOne({user_id: user_id, business_id: business_id}, {$set: {like : like}});

export const addReview = (review) => reviewsModel.create(review);

export const findReview = (id) => reviewsModel.find({_id: id});

export const findAllReviews = (business_id) => reviewsModel.find({"business_id": business_id});

export const updateReview = (id, review) => reviewsModel.updateOne({_id: id}, {$set: {review: review}});

export const removeReview = (id) => reviewsModel.deleteOne({_id: id});