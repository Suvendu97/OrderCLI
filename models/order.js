const mongoose = require('mongoose');

// Order Schema
const orderSchema = mongoose.Schema({
  name: { type: String },
  phone: { type: String },
  email: { type: String },
  value: { type: Number},
  item: { type: String },
  deliveryDate: { type: String }
});

// Define and export
module.exports = mongoose.model('Order', orderSchema);