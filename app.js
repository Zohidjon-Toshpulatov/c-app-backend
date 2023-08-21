const express = require("express");
const timeSlotRouter = require(`${__dirname}/routes/timeSlotRoutes.js`);
const cors = require('cors');
const serverless = require('serverless-http')

const app = express();
app.use(express.json());

const corsOptions = {
  origin: '*', // Allow this origin
  methods: '*', // Allow these methods
  allowedHeaders: 'Content-Type' // Allow this header
};
app.use(cors(corsOptions));

app.use("/api/timeslots", timeSlotRouter);

module.exports = app;
module.exports.handler = serverless(app)