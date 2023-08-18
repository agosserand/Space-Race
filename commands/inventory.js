const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema({
  pickaxe: { type: Number, default: 0 },
  fuelCells: { type: Number, default: 0 },
  // Add other items as needed
});

module.exports = mongoose.model('Inventory', inventorySchema);
