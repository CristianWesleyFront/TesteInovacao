const restful = require('node-restful')
const mongoose = restful.mongoose

const movimentacaoSchema = new mongoose.Schema({
    description: { type: String, min: 0, max: 5, required: true },
    funcionario: { type: String, required: true },
    valor: { type: Number, required: true },
    createdAt: {type: Date, default: Date.now } 
  })
  module.exports = restful.model('Movimentacao', movimentacaoSchema)