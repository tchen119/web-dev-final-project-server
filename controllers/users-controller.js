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
    console.log(req);
    res.json(existingUser);
  } else {
    res.sendStatus(503);
  }
}

const profile = (req, res) => {
  console.log(req);
  const currentUser = req.session['currentUser'];
  if (currentUser && currentUser.length > 0) {
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
  const user_id = req.params.id;
  Object(user_id);
  const user = await usersDao.findUserById(user_id);
  res.json(user);
}

const favorite = async (req, res) => {
  const fave = req.body.bid;
  const currentUser = req.session['currentUser'][0];
  if (currentUser.favorites && !currentUser.favorites.includes(fave)) {
    currentUser.favorites = [...currentUser.favorites, fave];
  } else {
    currentUser.favorites = [];
    currentUser.favorites = [...currentUser.favorites, fave];
  }
  await usersDao.updateUserFavorites(currentUser.email, currentUser);
  res.sendStatus(200);
}

const removeFavorite = async (req, res) => {
  const faveToRemove = req.params.bid.toString();
  const currentUser = req.session['currentUser'][0];
  if (currentUser.favorites) {
    const faveIndex = currentUser.favorites.findIndex(favorite => favorite === faveToRemove);
    currentUser.favorites.splice(faveIndex, 1);
  }
  await usersDao.updateUserFavorites(currentUser.email, currentUser);
  res.sendStatus(200);
}

const update = async (req, res) => {
  const user = req.body;
  const existingUser = await usersDao.findUserByEmail(user.email);
  if (existingUser.length <= 0) {
    res.sendStatus(403);
  } else {
    const updateUser = await usersDao.updateUser(user.email, user);
    const userObj = await usersDao.findByCredentials(user.email, user.password);
    req.session['currentUser'] = userObj;
    res.json(updateUser);
  }
}

export default (app) => {
  app.post('/api/signup', signup);
  app.post('/api/signin', signin);
  app.post('/api/signout', signout);
  app.post('/api/profile', profile);

  app.get('/api/users', users);
  app.get('/api/users/:id', getUserById);

  app.put('/api/favorite', favorite);
  app.put('/api/updateprofile', update);
  app.delete('/api/favorite/:bid', removeFavorite);
}