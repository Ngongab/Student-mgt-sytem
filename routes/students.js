const express = require("express");
const router = express.Router();
const {
  getStudents,
  addStudent,
  deleteStudent,
} = require("../controllers/students");

router.route("/")
.get(getStudents)
.post(addStudent);

router
.route("/:id")
.delete(deleteStudent);

module.exports = router;
