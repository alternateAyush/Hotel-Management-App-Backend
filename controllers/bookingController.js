const Booking = require('../models/bookingModel');
const Room = require('../models/roomModel');

const getAllBooking = async(req,res)=>{
    try{
        const bookings = await Booking.find({});  
        res.status(200).json({total:bookings.length,bookings:bookings});      
    }catch(err){
        console.log('error in /booking', err);
        res.status(500).json({message:err.message})
    }
}

const addBooking = async(req,res)=>{
    try{
        // const rooms = Room.find({roomType:'RT001',availability:true}).sort({roomNumber:1})
        const rooms = await Room.find({roomType:req.body.roomType,availability:true}).sort({roomNumber:1})
        if(rooms[0]){
            const room = rooms[0];
            const newReqBody = {...req.body,roomNumber:room.roomNumber};
            console.log(newReqBody)
            const booking = await Booking.create(newReqBody);
            const newRoomStatus = await Room.findByIdAndUpdate(room._id,{availability:false});
            res.status(200).json({availability:true, booking:booking});
        }
        else{res.status(200).json({availability:false})}
    }catch(err){
        console.log('error in /booking/addBooking',err)
        res.status(500).json({message:err.message})
    }
}

module.exports = {getAllBooking,addBooking}