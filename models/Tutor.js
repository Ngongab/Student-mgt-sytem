const mongoose = require("mongoose");
const StudentSchema = require("../models/Student");

const TutorSchema = new mongoose.Schema({
  firstName: {
    type: String,
    trim: true,
    required: [true, "Please add some text"],
  },

  lastName: {
    type: String,
    trim: true,
    required: [true, "Please add some text"],
  },

  course: 
    {
      type: String,
      trim: true,
      required: [true, "Please add some text"],
    },


  students: [
    {
      id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Student",
      },
    },
  ],

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Tutor", TutorSchema);
