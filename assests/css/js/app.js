
// app.js

const express = require('express');
const app = express();
const PORT = 3000; // You can choose any available port number

// Sample data - Replace this with your actual data source or database
const searchData = [
  'apple',
  'banana',
  'orange',
  'grapes',
  // Add more data here...
];

// Set up the route for the search endpoint
app.get('/search', (req, res) => {
  const searchTerm = req.query.query.toLowerCase();

  // Perform the search
  const searchResult = searchData.find((item) => item.toLowerCase() === searchTerm);

  if (searchResult) {
    // If a match is found, redirect to the search results page
    res.redirect(`/search-results?q=${searchResult}`);
  } else {
    // If no match is found, redirect to the 404 page
    res.redirect('/404');
  }
});

// Route for the custom 404 page
app.get('/404', (req, res) => {
  res.status(404).send('404 - Page not found');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
