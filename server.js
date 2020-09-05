const express = require("express");
const htmlRoutes = require("./htmlRoutes");

// Initialize the app and create a port
const app = express();
const PORT = process.env.PORT || 3000;

// Set up body parsing, static, and route middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/", htmlRoutes);


// Start the server on the port
app.listen(PORT, function() {
  console.log("Listening on PORT: " + PORT);
});
