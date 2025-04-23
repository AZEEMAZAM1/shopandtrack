const mongoose = require('mongoose');

const deliverySchema = new mongoose.Schema({
  driverName: { type: String, required: true },
  deliveryAddress: { type: String, required: true },
  deliveryDate: { type: Date, required: true },
  status: { type: String, default: 'Pending' },
}, { timestamps: true });

module.exports = mongoose.model('Delivery', deliverySchema);