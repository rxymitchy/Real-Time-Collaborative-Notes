const Note = require('../models/Note');

// Save or update a note
exports.saveNote = async (req, res) => {
    try {
        const { roomId, content } = req.body;
        let note = await Note.findOne({ roomId });
        if (!note) {
            note = new Note({ roomId, content });
        } else {
            note.content = content;
        }
        await note.save();
        res.status(200).json(note);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get a note by roomId
exports.getNote = async (req, res) => {
    try {
        const note = await Note.findOne({ roomId: req.params.roomId });
        if (!note) {
            return res.status(404).json({ message: 'Note not found' });
        }
        res.status(200).json(note);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};