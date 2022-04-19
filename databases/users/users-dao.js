import usersModel from "./users-model.js";

export const findAllUsers = async () => usersModel.find();

export const findUserByEmail = (email) => usersModel.find({email: email});

export const findUserById = (id) => usersModel.find({user_id: id});

export const findByCredentials = async (email, password) => usersModel.find({email: email, password: password});

export const createUser = async (user) => usersModel.create(user);