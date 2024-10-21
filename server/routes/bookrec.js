const express = require('express');
const router = express.Router();
const Bookrec = require('../models/bookrec');



// Create a new profile
router.post('/', async (req, res) => {
  try {
    const { bi, bn, ba,bs } = req.body;
    const bookrec = new Bookrec({ bi, bn, ba,bs });
    await bookrec.save();
    res.status(201).json(bookrec);
  } catch (error) {
    res.status(500).json({ error: 'Could not create profile' });
  }
});

// Fetch user profiles
router.get('/', async (req, res) => {
  try {
    const bookrec = await Bookrec.find();
    res.status(200).json(bookrec);
  } catch (error) {
    res.status(500).json({ error: 'Could not fetch profiles' });
  }
});

module.exports = router;