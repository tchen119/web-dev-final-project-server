import usersModel from "./users-model.js";

export const updateUserFavorites = async (email, user) => usersModel.updateOne({email: email}, {$set: user});

export const findAllUsers = async () => usersModel.find();

export const findUserByEmail = (email) => usersModel.find({email: email});

export const findUserById = (id) => usersModel.find({_id: id});

export const findByCredentials = async (email, password) => usersModel.find({email: email, password: password});

export const createUser = async (user) => usersModel.create(user);