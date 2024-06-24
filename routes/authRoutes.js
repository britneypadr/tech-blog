const { hashPassword, comparePasswords } = require('../utils/bcrypt');
const { User } = require('../models');

// Example signup route using hashPassword function
router.post('/signup', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Hash the password before storing in database
    const hashedPassword = await hashPassword(password);

    // Create new user with hashed password
    await User.create({ username, password: hashedPassword });

    res.redirect('/auth/login');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error signing up');
  }
});

// Example login route using comparePasswords function
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ where: { username } });

    if (!user) {
      return res.status(401).send('Invalid username or password');
    }

    // Compare entered password with stored hashed password
    const isMatch = await comparePasswords(password, user.password);

    if (!isMatch) {
      return res.status(401).send('Invalid username or password');
    }

    req.session.user = user;
    res.redirect('/');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error logging in');
  }
});