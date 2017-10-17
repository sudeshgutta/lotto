const express = require("express");
const path = require("path");
const _ = require("lodash-node/compat");

const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "client/build")));

// Put all API endpoints under '/api'
app.get("/api/lotto", (req, res) => {
  const count = 5;

  // Generate 6 numbers 
  const numbers = Array.from(Array(count).keys()).map(i =>
    _.sortBy(_.sample(_.range(1, 59), 6))
  );

  // Return them as json
  res.json(numbers);

  console.log(`Sent ${count} lotto rows`);
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Lotto random number generator listening on ${port}`);
