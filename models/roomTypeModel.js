const mongoose = require("mongoose");
const roomTypeSchema = mongoose.Schema(
  {
    _id: {
      type: String,
      required: [true, "Please enter room type id."],
      unique:true
    },
    name: {
      type: String,
      required: [true, "Please enter room name."],
      unique:true
    },
    capacity: {
      type: Number,
      required: true,
      default: 1,
    },
    price: {
      type: Number,
      required: true,
      default: 4000,
    },
    image: {
      type: String,
      required: false,
    },
    description: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const RoomType = mongoose.model("RoomType", roomTypeSchema);
module.exports = RoomType;
