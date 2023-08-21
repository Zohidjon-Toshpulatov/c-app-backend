const express = require('express')
const {getTimeSlots, createTimeSlot, editTimeSlot, deleteTimeSlot, getTimeslot} = require('../controllers/timeSlotController')

const router = express.Router();

router.route('/').get(getTimeSlots).post(createTimeSlot)
router.route('/:id').get(getTimeslot).put(editTimeSlot).delete(deleteTimeSlot)

module.exports = router