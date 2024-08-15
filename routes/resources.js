const express = require('express');
const router = express.Router();
const Resource = require('../models/Resource');

// Route pour ajouter une ressource
router.post('/', async (req, res) => {
  const { title, description, content, type } = req.body;

  try {
    if (!title || !content || !type) {
      return res.status(400).json({ msg: 'Please provide all required fields' });
    }

    const newResource = new Resource({
      title,
      description,
      content,
      type
    });

    const resource = await newResource.save();
    res.json(resource);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Route pour voir toutes les ressources
router.get('/', async (req, res) => {
  try {
    const resources = await Resource.find();
    res.json(resources);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
