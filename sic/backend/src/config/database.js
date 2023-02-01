const mongoose = require ('mongoose');

const url = 'mongodb://localhost:27017/item';

mongoose
    .connect(url, { useNewUrlParser: true, useUnifiedTopology: true, family: 4});

module.exports = mongoose;