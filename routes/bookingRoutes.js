const express = require('express');
const {getAllBooking, addBooking} = require('../controllers/bookingController')
const router=express.Router();

router.get('/',getAllBooking);
router.post('/addBooking',addBooking);

module.exports = router;