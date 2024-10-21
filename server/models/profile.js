// models/Profile.js
const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model
    required: true,
  },
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone:{
    type: String,
  },
  bio: {
    type: String,
  },
  at: {
    type: String,
  }
  
});

module.exports = mongoose.model('Profile', profileSchema);
