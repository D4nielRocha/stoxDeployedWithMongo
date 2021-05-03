const mongoose = require('mongoose');





mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});

const dbConnection = mongoose.connection;

dbConnection.on('error', console.error.bind(console, 'MongoDB connection error:'));
dbConnection.once('open', () => console.log('connected to mongodb'));

module.exports = {
    mongoose, 
    dbConnection
}
