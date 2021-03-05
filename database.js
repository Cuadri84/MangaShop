const mongoose = require('mongoose');

const URI= 'mongodb://localhost/MangaShop';

mongoose.connect(URI)
    .then(db=>console.log('db connected'))
    .catch(err=>console.error(err))


module.exports = mongoose;