import axios from 'axios';

const auth = 'Bearer qmTEtLDkR8T2bw0tJHWjkD-_kZpu39-28jVvi2AlW8_P4MEr5a4i82vewQay7X_sLRTvGFZbODg1-aIok43o-AbOATtg07702ljJP-Pnw_xNfUykVHLWai3lbVdhYnYx';

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