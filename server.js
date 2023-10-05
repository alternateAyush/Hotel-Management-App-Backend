require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const {roomTypeRoute,roomRoute,bookingRoute} = require('./routes/index')
const cors = require('cors')
const app = express();
const dbUrl = process.env.DATABASE_URL;

//middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))

//routes
app.use('/api/owner/roomType',roomTypeRoute)
app.use('/api/owner/room',roomRoute)
app.use('/api/booking',bookingRoute)
app.get("/", (req, res) => {
  res.send("Hello World");
});
// app.get("/blog", (req, res) => {
//   res.send("Hello Blog");
// });

mongoose
  .connect(
    `${dbUrl}`
  )
  .then(() => {
    console.log("Successfuly connected to mongoDb");
    app.listen(8080, () => {
      console.log("app is running on port 8080");
    });
  })
  .catch((error) => {
    console.log("Failed to connect to mongoDb: ", error);
  });