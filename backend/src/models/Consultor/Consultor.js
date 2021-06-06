const mongoose = require('mongoose');

const ConsultorSchema = mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    }
});

module.exports = Consultor = mongoose.model('consultor', ConsultorSchema);
