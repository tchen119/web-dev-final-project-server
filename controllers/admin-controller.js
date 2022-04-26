import * as adminDao from "../databases/users/admin-dao.js";

const addAdmin = async (req, res) => {
  const admin = req.body;
  const insertedAdmin = await adminDao.addAdmin(admin);
  res.json(insertedAdmin);
}

const findAdmin = async (req, res) => {
  const user_id = req.params.user_id;
  const admin = await adminDao.findAdmin(user_id);
  res.json(admin);
}

const addDeletedReview = async (req, res) => {
  const user_id = req.params.user_id;
  const review = req.body;
  const status = await adminDao.addDeletedReview(user_id, review);
  res.send(status);
}

const addEditedReview = async (req, res) => {
  const user_id = req.params.user_id;
  const review = req.body;
  const status = await adminDao.addUpdatedReview(user_id, review);
  res.send(status);
}

export default (app) => {
  app.get('/api/admin/:user_id', findAdmin);
  app.post('/api/admin', addAdmin);
  app.put('/api/admin/deletedReview/:user_id', addDeletedReview);
  app.put('/api/admin/updatedReview/:user_id', addEditedReview);
}