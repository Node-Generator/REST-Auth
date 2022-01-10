export default {
  port: process.env.PORT || 3000,
  mongo: {
    url: process.env.MONGO_URL,
    dbName: process.env.MONGO_DB_NAME,
  },
  JWT: {
    secret: process.env.JWT_SECRET,
    expiresIn: process.env.JWT_EXPIRES_IN,
  },
};
