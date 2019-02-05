const restful = require('node-restful')
const mongoose = restful.mongoose

const movimentacaoSchema = new mongoose.Schema({
    titulo: { type: String, required: true },
    descricao: { type: String, max: 500, required: true },
    funcionario: { type: String, required: true },
    departamento: { type: String, required: true },
    valor: { type: Number, required: true }
  })
  module.exports = restful.model('Movimentacao', movimentacaoSchema)