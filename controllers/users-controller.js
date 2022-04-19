import * as usersDao from "../databases/users/users-dao.js";

const signup = async (req, res) => {
  const user = req.body;
  const existingUser = await usersDao.findUserByEmail(user.email);
  if (existingUser.length > 0) {
    res.sendStatus(403);
  } else {
    const newUser = await usersDao.createUser(user);
    const newUserObj = await usersDao.findByCredentials(user.email, user.password);
    req.session['currentUser'] = newUserObj;
    res.json(newUser);
  }
}

const signin = async (req, res) => {
  const existingUser = await usersDao.findByCredentials(req.body.email, req.body.password);
  if (existingUser.length > 0) {
    req.session['currentUser'] = existingUser;
    res.json(existingUser);
  } else {
    res.sendStatus(503);
  }
}

const profile = (req, res) => {
  const currentUser = req.session['currentUser'];
  if (currentUser) {
    res.json(currentUser);
  } else {
    res.sendStatus(503);
  }
}

const signout = (req, res) => {
  req.session.destroy();
  res.sendStatus(200);
}

const users = async (req, res) => {
  const allUsers = await usersDao.findAllUsers();
  res.json(allUsers);
}

const getUserById = async (req, res) => {
  const user_id = req.params.user_id;
  const user = await usersDao.findUserById(user_id);
  res.json(user);
}

export default (app) => {
  app.post('/api/signup', signup);
  app.post('/api/signin', signin);
  app.post('/api/signout', signout);
  app.post('/api/profile', profile);

  app.get('/api/users', users);
  app.get('/api/users/:id', getUserById);
}