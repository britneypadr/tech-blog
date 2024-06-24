const express = require('express');
const { Post } = require('../models');
const router = express.Router();

// Dashboard route
router.get('/', async (req, res) => {
  try {
    const userId = req.session.user.id; // Assuming user is authenticated and stored in session
    const posts = await Post.findAll({ where: { userId } });
    res.render('dashboard', { posts });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching posts');
  }
});

// Create post route
router.get('/new', (req, res) => {
  res.render('new-post');
});

router.post('/new', async (req, res) => {
  try {
    const { title, content } = req.body;
    const userId = req.session.user.id;
    await Post.create({ title, content, userId });
    res.redirect('/dashboard');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error creating post');
  }
});

// Delete post route
router.post('/:id/delete', async (req, res) => {
  try {
    const postId = req.params.id;
    await Post.destroy({ where: { id: postId } });
    res.redirect('/dashboard');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error deleting post');
  }
});

module.exports = router;