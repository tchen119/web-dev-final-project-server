import likesModel from './likes-model.js';
import reviewsModel from './reviews-model.js'

export const addLike = (like) => likesModel.create(like);

export const removeLike = (user_id, business_id) =>
  likesModel.deleteOne({user_id: user_id, business_id: business_id});

export const findLike = (user_id, business_id) =>
  likesModel.find({user_id: user_id, business_id: business_id});

export const findAllLikesByUser = (user_id) =>
  likesModel.find({user_id: user_id});

export const findAllLikes = () => likesModel.find({like: true});

export const findLikesByBusiness = (business_id) =>
  likesModel.find({like: true, business_id: business_id});

export const findDislikesByBusiness = (business_id) =>
  likesModel.find({like: false, business_id: business_id});

export const updateLike = (user_id, business_id, like) =>
  likesModel.updateOne({user_id: user_id, business_id: business_id}, {$set: like});

export const addReview = (review) => reviewsModel.create(review);

export const findAllReviewsByBusiness = (business_id) => reviewsModel.find({"business_id": business_id});

export const findAllReviewsByBusinessIdName = (business_id, business_name) => reviewsModel.find({"business_id": business_id, "business_name": business_name});

export const findAllReviews = async () => reviewsModel.find();

export const findAllReviewsByUser = (user_id) => reviewsModel.find({"user_id": user_id});

export const updateReview = (id, review) => reviewsModel.updateOne({_id: id}, {$set: review});

export const removeReview = (id) => reviewsModel.deleteOne({_id: id});