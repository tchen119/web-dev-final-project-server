import usersModel from "./users-model.js";

export const findAllUsers = async () => usersModel.find();

export const findUserByEmail = async (email) => usersModel.find({email: email});

export const findByCredentials = async (email, password) => usersModel.find({email: email, password: password});

export const createUser = async (user) => usersModel.create(user);