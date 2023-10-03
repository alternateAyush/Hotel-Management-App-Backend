const express = require("express");
const {postNewRoomType,getAllRoomTypes} = require('../controllers/roomTypeController');
const router = express.Router();

// routes
router.get("/", getAllRoomTypes);
router.post("/addNewRoomType", postNewRoomType);

module.exports = router;
