const mongoose = require('mongoose')

const Schema = mongoose.Schema

const timeSlotSchema = new Schema({
    firstname: {
        type: String,
        unique:true,
        required: [true, 'First Name must be unique and complusery'],
    },
    lastname: {
        type: String,
        required: [true, 'Last Name is complusery']
    },
    description: String,
    dateRangeStart:{
        type:Date,
        required:[true, 'Date range start is must']
    }, 
    dateRangeEnd:{
        type:Date,
        required:[true, 'Date range end is must'],
    }, 
    slots: [{
        id:Number,
        label: String
    }]
})

const TimeSlots = mongoose.model('TimeSlots', timeSlotSchema)

module.exports = TimeSlots