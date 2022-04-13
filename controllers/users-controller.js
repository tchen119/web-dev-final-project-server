const signup = async (req, res) => {
//  const user = req.body;
//  const existingUser = await usersDao.findUserByEmail(user.email);
//  if (existingUser) {
//    res.sendStatus(403);
//  } else {
//    const newUser = await usersDao.createUser(user);
//    res.json(newUser);
//  }
}

const signin = async (req, res) => {
//  const existingUser = await userDao.findByCredentials(req.body.email, req.body.password);
//  if (existingUser) {
//    req.session['currentUser'] = existingUser;
//  } else {
//    res.sendStatus(503);
//  }
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

export default (app) => {
  app.post('/api/signup', signup);
  app.post('/api/signin', signin);
  app.post('/api/signout', signout);
  app.post('/api/profile', profile);
}