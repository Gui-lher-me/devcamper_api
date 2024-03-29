const Bootcamp = require('../models/Bootcamp');

// @desc - Get all bootcamps
// @route - GET /api/v1/bootcamps
// @access - Public
const getBootcamps = async (req, res) => {
  try {
    const bootcamps = await Bootcamp.find();

    res.status(200).json({
      success: true,
      data: bootcamps,
      count: bootcamps.length,
    });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

// @desc - Get single bootcamp
// @route - GET /api/v1/bootcamps/:id
// @access - Public
const getBootcamp = async (req, res) => {
  try {
    const { id } = req.params;

    const bootcamp = await Bootcamp.findById(id);

    if (!bootcamp) return res.status(400).json({ success: false });

    res.status(200).json({
      success: true,
      data: bootcamp,
    });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

// @desc - Create new bootcamp
// @route - POST /api/v1/bootcamps
// @access - Private
const createBootcamp = async (req, res) => {
  try {
    const bootcamp = await Bootcamp.create(req.body);

    res.status(201).json({
      success: true,
      data: bootcamp,
    });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

// @desc - Update bootcamp
// @route - PUT /api/v1/bootcamps/:id
// @access - Private
const updateBootcamp = async (req, res) => {
  try {
    const { params, body } = req;
    const { id } = params;

    const bootcamp = await Bootcamp.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    });

    if (!bootcamp) return res.status(400).json({ success: false });

    res.status(200).json({
      success: true,
      data: bootcamp,
    });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

// @desc - Delete bootcamp
// @route - DELETE /api/v1/bootcamps/:id
// @access - Private
const deleteBootcamp = async (req, res) => {
  try {
    const { id } = req.params;

    const bootcamp = await Bootcamp.findByIdAndDelete(id);

    if (!bootcamp) return res.status(400).json({ success: false });

    res.status(200).json({
      success: true,
      data: {},
    });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

module.exports = {
  deleteBootcamp,
  updateBootcamp,
  createBootcamp,
  getBootcamp,
  getBootcamps,
};
