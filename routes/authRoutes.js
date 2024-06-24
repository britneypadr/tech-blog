const express = require('express');
const bcrypt = require('bcrypt');
const { User } = require('../models');
const router = express.Router();

// Signup route
router.get('/signup', (req, res) => {
  res.render('signup'); // Render signup form
});

router.post('/signup', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Check if username already exists
    const existingUser = await User.findOne({ where: { username } });
    if (existingUser) {
      return res.status(400).send('Username already exists');
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = await User.create({ username, password: hashedPassword });

    // Redirect to login page
    res.redirect('/auth/login');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error signing up');
  }
});

// Login route
router.get('/login', (req, res) => {
  res.render('login'); // Render login form
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Find user by username
    const user = await User.findOne({ where: { username } });

    // Check if user exists and password is correct
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).send('Invalid username or password');
    }

    // Store user session
    req.session.user = user;

    // Redirect to home page
    res.redirect('/');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error logging in');
  }
});

// Logout route
router.get('/logout', (req, res) => {
  req.session.destroy(() => {
    res.redirect('/');
  });
});

module.exports = router;