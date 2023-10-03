const express = require("express");
const {postNewRoom,getAllRooms} = require('../controllers/roomController');
const router = express.Router();

// routes
router.get("/", getAllRooms);
router.post("/addNewRoom", postNewRoom);

module.exports = router;
