const db = require('../config/connection');
const { User } = require('../models');
require('dotenv').config()

const userSeeds = 
  {
    "username": process.env.REACT_APP_DB_NAME,
    "email": process.env.REACT_APP_DB_EMAIL,
    "password": process.env.REACT_APP_DB_PASSWORD,
    "admin": true
  }

db.once('open', async () => {
  try {
    await User.deleteMany({});
    await User.create(userSeeds);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
  process.exit(0);
});
