const mongoose = require('mongoose');
// const URI = 'mongodb://localhost/mean-crud';
const URI = 'mongodb://139.59.152.136:27017/mean-crud';

mongoose.connect(URI)
    .then(db => console.log('db is connected'))
    .catch(err => console.error(err));

module.exports = mongoose;