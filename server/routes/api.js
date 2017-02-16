const express = require('express');
const router = express.Router();
//const db = mongojs('mongodb://kalmuraee:H3sfSE5Cf2tp@ds149479.mlab.com:49479/userslistdb', ['users']);

// declare axios for making http requests
const axios = require('axios');
const API = 'https://jsonplaceholder.typicode.com';

// GET api listing.
router.get('/', (req, res) => {
  res.send('api works');
});

// Get all posts
router.get('/posts', (req, res) => {
  // Get posts from the mock api

  // Mongojs should be blow here
  axios.get(`${API}/posts`)
    .then(posts => {
      res.status(200).json(posts.data);
    })
    .catch(error => {
      res.status(500).send(error)
    });
});

module.exports = router;

