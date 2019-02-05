const restful = require('node-restful')
const mongoose = restful.mongoose
const departamento = require('../Departamento/Departamento')

const funcionarioSchema = new mongoose.Schema({
    name: { type: String, max:200, required: true },
    departamento: [departamento]
  })
  module.exports = restful.model('Funcionario', funcionarioSchema)