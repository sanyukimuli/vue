// 1. Dependencies
const express = require("express")

const mongoose = require("mongoose")
const dotenv = require("dotenv").config()

// 2.  lnstatiations
const app = express();
const PORT = process.env.PORT || 8000;
// 3.Middleware
app.use(express.json());
//4. Configurations
// Configuring the database
mongoose.connect(process.env.DATABASE);
mongoose.connection
  .once("open", () => {
    console.log("Mongoose connection open!");
  })
  .on("error", (error) => {
    console.error(`Connection error: ${error.message}`);
  });
// Routes
const productRoutes = require("./routes/productRoutes")
app.use("/",productRoutes)

app.listen(PORT,()=>{console.log(`Server is running on port ${PORT}`)})