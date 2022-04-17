import * as businessesDao from "../databases/businesses/businesses-dao.js";

const getUserLikes = async (req, res) => {
  const user_id = req.params.id;
  const response = await businessesDao.findAllLikesByUser(user_id);
  res.json(response);
}

const getUserReviews = async (req, res) => {
  const user_id = req.params.id;
  const response = await businessesDao.findAllReviewsByUser(user_id);
  res.json(response);
}

export default (app) => {
  app.get('/api/users/likes/:id', getUserLikes);
  app.get('/api/users/reviews/:id', getUserReviews);
}