const express = require('express');
const axios = require('axios');
const router = express.Router();
const GET_URL = 'https://newsapi.org/v2/top-headlines';
const {API_KEY} = require('../config');

router.get('/search', (request, response) => {
//  const {searchTerm} = request.body;
 console.log(request.query);

  // add the API_KEY from the server side, no need to expose it on the client
//   const query = {params: {apiKey: API_KEY, language:'en', q:searchTerm}};
//   axios.get(GET_URL, query)
//     .then(({data}) => response.json(data))
//     .catch(error => response.status(500).json(error));
    
});


module.exports =router;