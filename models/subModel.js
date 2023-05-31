const mongoose = require('mongoose');

const subSchema = new mongoose.Schema({
    id: Number,
    nome: String,
    sobrenome: String,
    nascimento : Date,
    telefone: Number,
    endereco: String, 
    cidade: String,
    estado: String,
    status : Boolean,
    imagem: String
});

module.exports = mongoose.model('subscriber', subSchema);