const express = require('express');
const axios = require('axios');
const router = express.Router();
const GET_URL = 'https://newsapi.org/v2/top-headlines';
const {API_KEY} = require('../config');

router.get('/headlines', (request, response) => {
 
  // add the API_KEY from the server side, no need to expose it on the client
  const query = {params: {apiKey: API_KEY, country:'us'}};
  axios.get(GET_URL, query)
    .then(({data}) => response.json(data))
    .catch(error => response.status(500).json(error));
    
});




router.get('/health', (request, response, next) => {
 
  //   add the API_KEY from the server side, no need to expose it on the client
  const query = {params: {apiKey: API_KEY, country:'us', category:'health'}};
  axios.get(GET_URL, query)
    .then(({data}) => response.json(data))
    .catch(error => response.status(500).json(error));
      
});

router.get('/science', (request, response, next) => {
 
  //   add the API_KEY from the server side, no need to expose it on the client
  const query = {params: {apiKey: API_KEY, country:'us', category:'science'}};
  axios.get(GET_URL, query)
    .then(({data}) => response.json(data))
    .catch(error => response.status(500).json(error));
      
});

router.get('/sports', (request, response, next) => {
 
  //   add the API_KEY from the server side, no need to expose it on the client
  const query = {params: {apiKey: API_KEY, country:'us', category:'sports'}};
  axios.get(GET_URL, query)
    .then(({data}) => response.json(data))
    .catch(error => response.status(500).json(error));
      
});

router.get('/technology', (request, response, next) => {
 
  //   add the API_KEY from the server side, no need to expose it on the client
  const query = {params: {apiKey: API_KEY, country:'us', category:'technology'}};
  axios.get(GET_URL, query)
    .then(({data}) => response.json(data))
    .catch(error => response.status(500).json(error));
      
});

router.get('/entertainment', (request, response, next) => {
 
  //   add the API_KEY from the server side, no need to expose it on the client
  const query = {params: {apiKey: API_KEY, country:'us', category:'entertainment'}};
  axios.get(GET_URL, query)
    .then(({data}) => response.json(data))
    .catch(error => response.status(500).json(error));
      
});

router.get('/business', (request, response, next) => {
 
  //   add the API_KEY from the server side, no need to expose it on the client
  const query = {params: {apiKey: API_KEY, country:'us', category:'business'}};
  axios.get(GET_URL, query)
    .then(({data}) => response.json(data))
    .catch(error => response.status(500).json(error));
      
});

module.exports =router;