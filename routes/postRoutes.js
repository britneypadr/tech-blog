const express = require('express');
const { Post, Comment } = require('../models');
const router = express.Router();

// Add comment route
router.post('/:postId/comment', async (req, res) => {
  const { postId } = req.params;
  const { content } = req.body;
  const userId = req.session.user.id; // Get logged-in user ID

  try {
    // Create new comment
    await Comment.create({ content, postId, userId });
    res.redirect(`/post/${postId}`); // Redirect to post page after adding comment
  } catch (error) {
    console.error(error);
    res.status(500).send('Error adding comment');
  }
});

module.exports = router;