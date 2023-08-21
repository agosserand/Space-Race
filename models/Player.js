const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
  discordID: { type: String, required: true },
  fragments: { type: Number, default: 0 },
  inventory: {
    pickaxe: { type: Number, default: 0 },
    fuelCell: { type: Number, default: 0 },
  },
  shipLevel: { type: Number, default: 1 },
  tripsTaken: { type: Number, default: 0 },
  // Add other attributes as needed
});

module.exports = mongoose.model('Player', playerSchema);
