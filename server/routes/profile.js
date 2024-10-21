// routes/profile.js
const express = require('express');
const router = express.Router();
const Profile = require('../models/profile');
const validateToken = require("../middlewares/validateToken");


// Create a new profile
router.post('/', async (req, res) => {
  try {
    const { name, email, bio, at } = req.body;
    const profile = new Profile({ name, email, bio, at });
    await profile.save();
    res.status(201).json(profile);
  } catch (error) {
    res.status(500).json({ error: 'Could not create profile' });
  }
});

// Fetch user profiles
router.get('/', async (req, res) => {
  try {
    const profiles = await Profile.find();
    res.status(200).json(profiles);
  } catch (error) {
    res.status(500).json({ error: 'Could not fetch profiles' });
  }
});

// Get user profile data by user ID
router.get('/get-my-profile', validateToken, async (req, res) => {

  try {
    const profile = await Profile.findOne({ user: req.user._id });
    if (!profile) {
      return res.status(404).json({ message: 'Profile not found' });
    }
    res.status(200).json(profile);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});


router.patch('/edit-my-profile',validateToken, async (req, res) => { 
  try {
    const profile = await Profile.findOne({ user: req.user._id });
    if (!profile) {
      return res.status(404).json({ message: 'Profile not found' });
    }
    const { name, email, bio, at, phone } = req.body;
    profile.name = name || profile.name;
    profile.email = email || profile.email;
    profile.bio = bio || profile.bio;
    profile.at = at || profile.at;
    profile.phone = phone || profile.phone;
    await profile.save();
    res.status(200).json(profile);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
