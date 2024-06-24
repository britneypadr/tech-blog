const express = require('express');
const { Post, Comment } = require('../models');
const router = express.Router();

// Post details route
router.get('/:id', async (req, res) => {
  try {
    const postId = req.params.id;
    const post = await Post.findByPk(postId, {
      include: [{ model: Comment, include: { model: User } }]
    });
    res.render('post', { post });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching post');
  }
});

// Add comment route
router.post('/:id/comment', async (req, res) => {
  try {
    const postId = req.params.id;
    const { content } = req.body;
    const userId = req.session.user.id; // Assuming user is authenticated and stored in session
    await Comment.create({ content, postId, userId });
    res.redirect(`/post/${postId}`);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error adding comment');
  }
});

module.exports = router;