const bcrypt = require('bcrypt');

const saltRounds = 10; // Number of salt rounds for hashing

/**
 * Hashes a plain text password using bcrypt.
 * @param {string} plainTextPassword - The plain text password to hash.
 * @returns {Promise<string>} A promise that resolves to the hashed password.
 */
const hashPassword = async (plainTextPassword) => {
  try {
    const hashedPassword = await bcrypt.hash(plainTextPassword, saltRounds);
    return hashedPassword;
  } catch (error) {
    throw new Error('Error hashing password');
  }
};

/**
 * Compares a plain text password with a hashed password using bcrypt.
 * @param {string} plainTextPassword - The plain text password to compare.
 * @param {string} hashedPassword - The hashed password to compare against.
 * @returns {Promise<boolean>} A promise that resolves to true if passwords match, false otherwise.
 */
const comparePasswords = async (plainTextPassword, hashedPassword) => {
  try {
    const match = await bcrypt.compare(plainTextPassword, hashedPassword);
    return match;
  } catch (error) {
    throw new Error('Error comparing passwords');
  }
};

module.exports = {
  hashPassword,
  comparePasswords,
};