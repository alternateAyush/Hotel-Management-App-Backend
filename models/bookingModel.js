const mongoose = require("mongoose");
const bookingSchema = mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "Please enter guest name."],
    },
    contactNumberPrimary:{
        type:Number,
        required:true,
    },
    contactNumberSecondary:{
        type:Number,
        required:true,
    },
    dob:{
        type: Date,
        required:true,
    },
    govIdType:{
        type:String,
        required:true,
    },
    govId:{
        type:String,
        required:true,
    },
    roomType:{
        type:String,
        required:true,
    },
    checkIn:{
        type:Date,
        required:true,
    },
    checkOut:{
        type:Date,
        required:true,
    },
    paymentType:{
        type:String,
        required:true,
    },
    total:{
        type:Number,
        required:true,
    },
    roomNumber:{
        type:String,
        required:true,       
    },
    note:{
        type:String,
    }
  },
  {
    timestamps: true,
  }
);

const Booking = mongoose.model("Booking", bookingSchema);
module.exports = Booking;
