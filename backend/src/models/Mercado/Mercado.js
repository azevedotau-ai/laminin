const mongoose = require('mongoose');

const MercadoSchema = mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
});

module.exports = Mercado = mongoose.model('mercado', MercadoSchema);
