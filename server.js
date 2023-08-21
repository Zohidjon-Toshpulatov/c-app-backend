const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

const app = require("./app");

const mongoDB = process.env.MONGODB_URI.replace(
  "<password>",
  process.env.PASSWORD
);
mongoose.connect(mongoDB);

const db = mongoose.connection;

db.on("connected", () => {
  console.log("Mongoose default connection done");
});

db.on("error", (err) => {
  console.log(process.config.env);
  console.log("Mongoose default connection error: " + err);
});

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
