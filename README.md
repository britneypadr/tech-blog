# Tech Blog

This project is a web application built with Node.js and Express, utilizing Sequelize as the ORM to interact with a MySQL database. It allows users to create, read, update, and delete blog posts, as well as comment on posts.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Deployment Issue on Heroku](#project-deployment-issue-on-heroku)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- User authentication and authorization (signup, login, logout)
- CRUD operations for blog posts
- Commenting system for posts
- Responsive UI design
- Error handling and validation

## Technologies Used

- Node.js
- Express.js
- Sequelize ORM
- MySQL Database
- HTML/CSS/JavaScript (Bootstrap for styling)
- Heroku (for deployment)

# Project Deployment Issue on Heroku

## Problem Description

I encountered issues while attempting to deploy my Node.js application on Heroku. Despite following the deployment steps correctly, the application failed to start.

## Error Message

Upon checking the Heroku logs (`heroku logs --tail`), the following error was observed:

2024-06-25T01:20:39.962222+00:00 app[web.1]: HostNotFoundError [SequelizeHostNotFoundError]: getaddrinfo ENOTFOUND your_database_host


## Steps Taken

1. **Check Configuration Files**: Ensured that all configuration files (`Procfile`, `package.json`) were correctly set up as required by Heroku.
   
2. **Database Configuration**: Verified database connection settings (`DATABASE_URL`) were correctly configured in the Heroku environment variables.

3. **Dependencies**: Ensured all dependencies required by the application were listed in `package.json` and properly installed.

4. **Build Process**: Ensured that the build process (`npm install` and `npm start`) was working correctly on the local machine before deployment.

## Solution Attempted

- **Database Connection**: Adjusted the database connection settings to match the Heroku environment and configuration requirements.

## Conclusion

Despite troubleshooting and adjusting settings, the issue persisted. Further investigation and potentially consulting Heroku's support or community forums may be necessary to resolve this issue.

## Additional Notes

- Documented detailed steps and error messages encountered during the deployment process for future reference.
- Considered alternative deployment methods or platforms if issues persist with Heroku.

## Installation

To run this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/tech-blog.git
   cd tech-blog

2. Install dependencies:
   ```bash
   npm install

3. Set up your database:
- Create a MySQL database.
- Configure your .env file with your database credentials:
  ```bash
  DB_HOST=your_database_host
DB_USER=your_database_user
DB_PASSWORD=your_database_password
DB_NAME=your_database_name
DB_PORT=your_database_port

4. Run database migrations:
   ```bash
   npx sequelize-cli db:migrate

5. Start the server:
   ```bash
   npm start

## Usage

- Sign up for a new account or use demo credentials.
- Create, view, edit, and delete blog posts.
- Comment on posts.

## Contributing
Contributions are welcome! Please fork the repository and create a pull request with your improvements.

## License
This project is licensed under the MIT License.
