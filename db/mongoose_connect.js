
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://nadermu:nader147@cluster0.hicvk.mongodb.net/lions', {useNewUrlParser: true, useUnifiedTopology: true});


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  // we're connected!
  console.log('mongoose connected')
});
module.exports = db;