const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const connectDB = require("./config/db");
const cors = require("cors");

dotenv.config({ path: "./config/config.env" });

connectDB();

const tutors = require("./routes/tutors");
const students = require("./routes/students");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/sms/tutors", tutors);
app.use("/sms/students", students);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow
      .bold
  )
);
