const mongoose = require("mongoose");
const TutorSchema = require("../models/Tutor");

const StudentSchema = new mongoose.Schema({
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

  tutor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Tutor",
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Student", StudentSchema);
