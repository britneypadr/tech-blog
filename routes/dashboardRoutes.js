const express = require('express');
const { Post } = require('../models');
const router = express.Router();

// Dashboard route (requires authentication)
router.get('/', async (req, res) => {
  try {
    const userId = req.session.user.id; // Get logged-in user ID
    const posts = await Post.findAll({ where: { userId } });
    res.render('dashboard', { posts }); // Render dashboard with user's posts
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching posts');
  }
});

// Create new post route
router.get('/new', (req, res) => {
  res.render('new-post'); // Render form to create new post
});

router.post('/new', async (req, res) => {
  const { title, content } = req.body;
  const userId = req.session.user.id; // Get logged-in user ID

  try {
    // Create new post
    await Post.create({ title, content, userId });
    res.redirect('/dashboard'); // Redirect to dashboard after creating post
  } catch (error) {
    console.error(error);
    res.status(500).send('Error creating post');
  }
});

// Delete post route
router.post('/:postId/delete', async (req, res) => {
  const { postId } = req.params;

  try {
    // Delete post by postId
    await Post.destroy({ where: { id: postId } });
    res.redirect('/dashboard'); // Redirect to dashboard after deleting post
  } catch (error) {
    console.error(error);
    res.status(500).send('Error deleting post');
  }
});

module.exports = router;