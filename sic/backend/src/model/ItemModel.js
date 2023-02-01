const mongoose = require('../config/database');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    nomeItem : {type: String, require: true},
    tipo: {type: Number, require: true},
    descricao: {type: String, require: true},
    comprado:{type: Boolean, default: false}
    });

module.exports = mongoose.model('Itens', ItemSchema);




