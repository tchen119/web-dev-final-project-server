import adminModel from "./admin-model.js";

export const findAdmin = async (user_id) => adminModel.find({"user_id": user_id});

export const addAdmin = async (admin) => adminModel.create(admin);

export const addDeletedReview = async (user_id, review) => adminModel.updateOne({"user_id": user_id}, {$push: {deletedReviews: review}});

export const addUpdatedReview = async (user_id, review) => adminModel.updateOne({"user_id": user_id}, {$push: {updatedReviews: review}});