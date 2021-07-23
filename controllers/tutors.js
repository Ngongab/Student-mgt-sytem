const Tutor = require("../models/Tutor");

//@desc Get all Tutors
//@route GET /tutors
//@access Public
exports.getTutors = async (req, res, next) => {
  try {
    const tutors = await Tutor.find()

    return res.status(200).json({
      success: true,
      count: tutors.length,
      data: tutors,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};


//@desc Add Tutors
//@route POST /tutors
//@access Public
exports.addTutor = async (req, res, next) => {
  try {
    const { firstName, lastName, course } = req.body;

    const tutor = await Tutor.create(req.body);

    return res.status(201).json({
      success: true,
      data: tutor,
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

//@desc Get a Tutor
//@route GET /tutor
//@access Public
exports.getTutor = async (req, res, next) => {
  try {

    const tutor = await Tutor.findById(req.params.id).populate("students");

    if (!tutor) {
      return res.status(404).json({
        success: false,
        error: "No tutor found",
      });
    } else {
      return res.status(200).json({
        success: true,
        data: tutor,
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

//@desc UPDATE a Tutor
//@route PUT /tutor
//@access Public
exports.updateTutor = async (req, res, next) => {
  try {

    const { firstName, lastName, course, student } = req.body;

    const tutor = await Tutor.findByIdAndUpdate(req.params.id, req.body);

    if (!tutor) {
      return res.status(404).json({
        success: false,
        error: "No tutor found",
      });
    } 

      return res.status(200).json({
        success: true,
        data: tutor,
      });
    
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

//@desc Delete Tutor
//@route DELETE /tutors
//@access Public
exports.deleteTutor = async (req, res, next) => {
  try {
    const tutor = Tutor.findById(req.params.id);

    if (!tutor) {
      return res.status(404).json({
        success: false,
        error: "No tutor found",
      });
    } else {
      await tutor.deleteOne();

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
