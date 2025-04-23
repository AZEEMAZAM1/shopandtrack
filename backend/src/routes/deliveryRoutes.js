const express = require('express');
const { getDeliveries, createDelivery } = require('../controllers/deliveryController');

const router = express.Router();

router.get('/', getDeliveries);
router.post('/', createDelivery);

module.exports = router;