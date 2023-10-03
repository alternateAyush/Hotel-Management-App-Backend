const Room = require("../models/roomModel");

const getAllRooms = async(req,res) =>{
    try{
        const room = await Room.find({});
        for(let i=0; i<room.length; i++){
          room[i]=await room[i].populate('roomType')
        }
        res.status(200).json({length:room.length,rooms:room});
    }catch(error){
        console.log("error in /owner/room ",error.message);
        res.status(500).json({message:error.message})
    }
}

const postNewRoom= async (req, res) => {
    try {
      const room = await Room.create(req.body);
      res.status(200).json(room);
    } catch (error) {
      console.log("error in /owner/addNewRoom ", error.message);
      res.status(500).json({ message: error.message });
    }
}
module.exports = {postNewRoom,getAllRooms};