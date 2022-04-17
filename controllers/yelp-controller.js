import axios from 'axios';

const auth = 'Bearer xOqSW56Ftl86T5PaVs1kUrOjpfY0PK3pk2VzIdqvyfw8C5U9KLTmplArF2xfcoVbkMJnsIv1ZTSpl6g2EiLK_Tr9xy76f-afL54YGqS7aCR_M6_QH9-NhFtx819TYnYx';

const getBusinessesByTermAndLocation = async (req, res) => {
  const YELP_URL = 'https://api.yelp.com/v3/businesses/search';
  const termParam = req.params.term;
  const locationParam = req.params.location;

  const response = await axios.get(
    YELP_URL,
    {params: {term: termParam, location: locationParam},
    headers: {Authorization: auth}}
  );

  res.json(response.data);
}

const getBusinessDetails = async (req, res) => {
  const id = req.params.id;
  const YELP_URL = 'https://api.yelp.com/v3/businesses/' + id;

  const response = await axios.get(
    YELP_URL,
    {headers: {Authorization: auth}}
  );

  res.json(response.data);
}

export default (app) => {
  app.get('/api/search/:term/:location', getBusinessesByTermAndLocation);
  app.get('/api/search/:id', getBusinessDetails);
}