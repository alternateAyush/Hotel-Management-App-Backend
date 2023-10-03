const mongoose = require("mongoose");
const roomSchema = mongoose.Schema(
  {
    _id:{
      type:String,
      required:[true, "Please enter room _id."],
      unique:true,
    },
    roomNumber: {
      type: Number,
      required: [true, "Please enter room number."],
      unique:true
    },
    roomType: {
        type:String,
        ref:'RoomType',
        required:true,
    },
    availability:{
      type: Boolean,
      required:true,
      default: true,
    }
  },
  {
    timestamps: true,
  }
);

const Room = mongoose.model("Room", roomSchema);
module.exports = Room;
