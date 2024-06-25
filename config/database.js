require('dotenv').config();

module.exports = {
  development: {
    username: 'root',   // Ensure this matches your MySQL username
    password: 'your_password',   // Ensure this matches your MySQL password
    database: 'tech_blog',  // Ensure this matches your MySQL database name
    host: 'localhost',
    dialect: 'mysql',
  },
  production: {
    
  }
};
