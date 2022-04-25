import * as businessesDao from "../databases/businesses/businesses-dao.js";

const addLike = async (req, res) => {
  const like = req.body;
  const insertedLike = await businessesDao.addLike(like);
  res.json(insertedLike);
}

const findLike = async (req, res) => {
  const user_id = req.params.user_id;
  const business_id = req.params.business_id;
  const like = await businessesDao.findLike(user_id, business_id);
  res.json(like);
}

const findLikes = async (req, res) => {
  const business_id = req.params.business_id;
  const response = await businessesDao.findLikesByBusiness(business_id);
  res.json(response);
}

const findDislikes = async (req, res) => {
  const business_id = req.params.business_id;
  const response = await businessesDao.findDislikesByBusiness(business_id);
  res.json(response);
}

const removeLike = async (req, res) => {
  const user_id = req.params.user_id;
  const business_id = req.params.business_id;
  const status = await businessesDao.removeLike(user_id, business_id);
  res.send(status);
}

const updateLike = async (req, res) => {
  const user_id = req.params.user_id;
  const business_id = req.params.business_id;
  const like = req.body;
  const status = await businessesDao.updateLike(user_id, business_id, like);
  res.send(status);
}

const addReview = async (req, res) => {
  const review = req.body;
  const insertedReview = await businessesDao.addReview(review);
  res.json(insertedReview);
}

const findAllReviews = async (req, res) => {
  const business_id = req.params.business_id;
  const reviews = await businessesDao.findAllReviewsByBusiness(business_id);
  res.json(reviews);
}

const findAllReviewsByIdAndName = async (req, res) => {
  const business_id = req.params.business_id;
  const business_name = req.params.business_name;
  const reviews = await businessesDao.findAllReviewsByBusinessIdName(business_id, business_name);
  res.json(reviews);
}

const findRecentReviews = async (req, res) => {
  const reviews = await businessesDao.findAllReviews();
  res.json(reviews);
}

const removeReview = async (req, res) => {
  const id = req.params.id;
  const status = await businessesDao.removeReview(id);
  res.send(status);
}

const updateReview = async (req, res) => {
  const id = req.params.id;
  const review = req.body;
  const status = await businessesDao.updateReview(id, review);
  res.send(status);
}

const findReviewsByUser = async (req, res) => {
  const id = req.params.user_id;
  const reviews = await businessesDao.findAllReviewsByUser(id);
  res.json(reviews);
}

const findAllLikes = async (req, res) => {
  const likes = await businessesDao.findAllLikes();
  res.json(likes);
}

export default (app) => {
  app.post('/api/businesses/likes', addLike);
  app.get('/api/businesses/likes', findAllLikes);
  app.get('/api/businesses/likes/:user_id/:business_id', findLike);
  app.get('/api/businesses/likes/:business_id', findLikes);
  app.get('/api/businesses/dislikes/:business_id', findDislikes);
  app.delete('/api/businesses/likes/:user_id/:business_id', removeLike);
  app.put('/api/businesses/likes/:user_id/:business_id', updateLike);

  app.post('/api/businesses/reviews', addReview);
  app.get('/api/businesses/reviews/:business_id', findAllReviews);
  app.get('/api/businesses/reviews/:business_id/:business_name', findAllReviewsByIdAndName);
  app.get('/api/businesses/reviews/', findRecentReviews);
  app.delete('/api/businesses/reviews/:id', removeReview);
  app.put('/api/businesses/reviews/:id', updateReview);
  app.get('/api/reviews/:user_id', findReviewsByUser);
}