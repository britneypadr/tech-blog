const express = require('express');
const { Post } = require('../models');
const router = express.Router();

// Home route
router.get('/', async (req, res) => {
  try {
    const posts = await Post.findAll();
    res.render('home', { posts });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching posts');
  }
});

module.exports = router;