const RoomType = require("../models/roomTypeModel");

const getAllRoomTypes = async(req,res) =>{
    try{
        const roomTypes = await RoomType.find({});
        res.status(200).json({length:roomTypes.length,roomTypes:roomTypes});
    }catch(error){
        console.log("error in /owner/roomTypes ",error.message);
        res.status(500).json({message:error.message})
    }
}

const postNewRoomType= async (req, res) => {
    try {
      const roomType = await RoomType.create(req.body);
      res.status(200).json(roomType);
    } catch (error) {
      console.log("error in /owner/addNewRoomType ", error.message);
      res.status(500).json({ message: error.message });
    }
}
module.exports = {postNewRoomType,getAllRoomTypes};