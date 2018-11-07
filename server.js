// Dependencies
// =============================================================
let express = require("express");
let path = require("path");

// Sets up the Express App
// =============================================================
let app = express();
let PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
// =============================================================

let tables = [
  {
    customerName: "Justin",
    phoneNumber: "4806122107",
    customerEmail: "brownee06@gmail.com",
    customerID: "justin"
  }
];

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });
  
  app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "add.html"));
  });
  
  app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
  });
  
  // Displays all characters
  app.get("/api/tables", function(req, res) {
    return res.json(tables);
  });

  app.post("/api/tables", function(req, res) {
    
    let newReservation = req.body;
  
    console.log(newReservation);
  
    tables.push(newReservation);
  
    res.json(newReservation);
  });

  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  