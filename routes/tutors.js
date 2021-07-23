const express = require("express");
const router = express.Router();
const { getTutors, addTutor, deleteTutor, getTutor, updateTutor } = require("../controllers/tutors");

router
.route("/")
.get(getTutors)
.post(addTutor);

router
.route("/:id")
.get(getTutor)

router
.route("/update/:id")
.put(updateTutor)

router
.route("/:id")
.delete(deleteTutor);

module.exports = router;
