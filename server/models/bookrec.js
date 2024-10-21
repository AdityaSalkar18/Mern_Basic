// models/Notifi.js
const mongoose = require('mongoose');

const bookrecSchema = new mongoose.Schema({
  bi: {
    type: String,
    required: true,
    
  },
  
  bn: {
    type: String,
    required: true,
    
  },
  
  ba: {
    type: String,
  },
  
  bs:{
    type:String,
  }
});

module.exports = mongoose.model('Bookrec', bookrecSchema);
