const Student = require("../models/Student");

//@desc Get all Tutors
//@route GET /tutors
//@access Public
exports.getStudents = async (req, res, next) => {
  try {
    const students = await Student.find();

    return res.status(200).json({
      success: true,
      count: students.length,
      data: students,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

//@desc Add Students
//@route POST /students
//@access Public
exports.addStudent = async (req, res, next) => {
  try {
    const { firstName, lastName } = req.body;

    const student = await Student.create(req.body);

    return res.status(201).json({
      success: true,
      data: student,
    });
  } catch (err) {
    if (err.name === "ValidationError") {
      const messages = Object.values(err.errors).map((val) => val.message);

      return res.status(400).json({
        success: false,
        error: messages,
      });
    } else {
      return res.status(500).json({
        success: false,
        error: "Server Error",
      });
    }
  }
};

//@desc Get a Student
//@route GET /student
//@access Public
exports.getStudent = async (req, res, next) => {
  try {
    const student = await Student.findById(req.params.id);

    if (!student) {
      return res.status(404).json({
        success: false,
        error: "No student found",
      });
    } else {
      return res.status(200).json({
        success: true,
        data: student,
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

//@desc UPDATE a Student
//@route PUT /student
//@access Public
exports.updateStudent = async (req, res, next) => {
  try {
    const { firstName, lastName } = req.body;

    const student = await Student.findByIdAndUpdate(req.params.id, req.body);

    if (!student) {
      return res.status(404).json({
        success: false,
        error: "No student found",
      });
    }

    return res.status(200).json({
      success: true,
      data: student,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

//@desc Delete Student
//@route DELETE /student
//@access Public
exports.deleteStudent = async (req, res, next) => {
  try {
    const student = Student.findById(req.params.id);

    if (!student) {
      return res.status(404).json({
        success: false,
        error: "No tutor found",
      });
    } else {
      await student.deleteOne();

      return res.status(200).json({
        success: true,
        data: {},
      });
    }
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};
