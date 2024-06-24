const express = require('express');
const { Post } = require('../models');
const router = express.Router();

// Home page route
router.get('/', async (req, res) => {
  try {
    // Fetch all posts
    const posts = await Post.findAll();
    res.render('home', { posts }); // Render home page with posts data
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching posts');
  }
});

// Individual post route
router.get('/post/:postId', async (req, res) => {
  const { postId } = req.params;

  try {
    // Fetch post by postId including associated comments
    const post = await Post.findByPk(postId, { include: 'comments' });
    if (!post) {
      return res.status(404).send('Post not found');
    }

    res.render('post', { post }); // Render post page with post and comments data
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching post');
  }
});

module.exports = router;