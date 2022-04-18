import * as usersDao from "../databases/users/users-dao.js";

const signup = async (req, res) => {
  const user = req.body;
  // prevent same email from being used twice
  const newUser = usersDao.createUser(user);
  res.json(newUser);
}

const signin = async (req, res) => {
  const existingUser = await usersDao.findByCredentials(req.body.email, req.body.password);
  if (existingUser) {
    req.session['currentUser'] = existingUser;
  } else {
    res.sendStatus(503);
  }
}

const signout = () => {
}

const profile = (req, res) => {
//  const currentUser = req.session['currentUser'];
//  if (currentUser) {
//    res.json(currentUser);
//  } else {
//    res.sendStatus()
//  }
}


const users = async (req, res) => {
  const allUsers = await usersDao.findAllUsers();
  res.json(allUsers);
}

export default (app) => {
  app.get('/users', users);
  app.post('/api/signup', signup);
  app.post('/api/signin', signin);
  app.post('/api/signout', signout);
  app.post('/api/profile', profile);
}