const mongoose = require('mongoose');

const songSchema = new mongoose.Schema({
  heartRate: {
    type: Number,
    required: true
  },
  songs: [String]
});

const Song = mongoose.model('Song', songSchema);