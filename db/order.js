const mongoose = require('mongoose');

const oderSchema = new mongoose.Schema({
    date: Date,
    items: Array(any),
    status: Number
});

const oderModel = mongoose.model('oder', oderSchema);

module.exports = oderModel;