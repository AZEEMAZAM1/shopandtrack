const Delivery = require('../models/deliveryModel');

exports.getDeliveries = async (req, res) => {
  try {
    const deliveries = await Delivery.find();
    res.json(deliveries);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createDelivery = async (req, res) => {
  const { driverName, deliveryAddress, deliveryDate } = req.body;
  try {
    const newDelivery = new Delivery({ driverName, deliveryAddress, deliveryDate });
    await newDelivery.save();
    res.status(201).json(newDelivery);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};