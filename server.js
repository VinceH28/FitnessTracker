// Dependencies
const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

//Where the app will be running locally
const PORT = process.env.PORT || 3000;

//Needed to be able to be used on heroku
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

// Below are the routes the app will be using
require("./routes/apiroutes.js")(app);
require("./routes/htmlroutes.js")(app);

//Needed to run the app locally using localhost
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});