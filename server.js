// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });
  
  app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "add.html"));
  });
  
  app.get("/api/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
  });
  
  // Displays all characters
  app.get("/api/characters", function(req, res) {
    return res.json(characters);
  });

  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  