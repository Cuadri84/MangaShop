const mongoose = require('mongoose');
const { Schema } = mongoose;

const MangasSchema = new Schema ({
    Titulo:{
        type: String,
    },
    Precio:{
        type: String,
    },
    Relevancia:{
        type: String,
    }
});

module.exports = mongoose.model('Mangas', MangasSchema);

