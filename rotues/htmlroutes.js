//Depedency
var path = require("path");

//The code below is the routes to the html pages. We use path to make sure the paths work regardless of the computer.
//Each route corresponds to the right html file
module.exports = function (app) {

  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
  app.get("/exercise", function (req, res) {
    console.log("Exercise");
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
  });
  app.get("/stats", function (req, res) {
    console.log("Stats");
    res.sendFile(path.join(__dirname, "../public/stats.html"));
  });
};