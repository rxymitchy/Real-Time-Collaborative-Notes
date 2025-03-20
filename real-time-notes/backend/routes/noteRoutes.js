const express = require('express');
const router = express.Router();
const noteController = require('../controllers/noteController');

// Save or update a note
router.post('/', noteController.saveNote);

// Get a note by roomId
router.get('/:roomId', noteController.getNote);

module.exports = router;