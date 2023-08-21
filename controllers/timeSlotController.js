const TimeSlots = require("../models/timeSlotsModel");

exports.getTimeSlots = async (req, res) => {
  try {
    const timeSlots = await TimeSlots.find();
    res.status(200).json({
      status: "success",
      data: {
        timeSlots,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error.message,
    });
  }
};

exports.getTimeslot = async (req, res) => {
  try {
    const timeSlot = await TimeSlots.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        timeSlot,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error.message,
    });
  }
};

exports.createTimeSlot = async (req, res) => {
  try {
    const newTimeSlot = await TimeSlots.create(req.body);
    res.status(200).json({
      status: "success",
      data: {
        newTimeSlot,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error.message,
    });
  }
};

exports.editTimeSlot = async (req, res) => {
  try {
    const timeSlot = await TimeSlots.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    res.status(200).json({
      status: "success",
      data: {
        timeSlot,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error.message,
    });
  }
};

exports.deleteTimeSlot = async (req, res) => {
  try {
    console.log("is it working");
    const timeSlot = await TimeSlots.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        timeSlot,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      status: "fail",
      message: error.message,
    });
  }
};
