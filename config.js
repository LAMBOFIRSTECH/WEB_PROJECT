// config.js

const config = {
    apiUrl: process.env.API_URL || 'http://lambo.lft:5163/index.html',
    apiKey: process.env.API_KEY || 'your-api-key',
    databaseUrl: process.env.DB_URL || 'mongodb://localhost:27017/mydatabase',
};

module.exports = config;