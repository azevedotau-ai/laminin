const mongoose = require('mongoose');

const HistoricoSchema = mongoose.Schema({
  nome_produto:{
    type: String,
    required: true
  },
  preco_produto:{
    type: Number,
    required: true
  },
  data_insert:{
    type: Date,
    default: Date.now
  },
  mercado:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'mercado'
  },
  descricao:{
    type: String,
    required: true
  }
});

module.exports = Historico = mongoose.model('historico', HistoricoSchema);
