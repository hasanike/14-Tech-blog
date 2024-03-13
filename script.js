const express = require('express');
const exphbs  = require('express-handlebars');

const app = express();

// Configure Express to use Handlebars as the view engine
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Define a route
app.get('/', (req, res) => {
  // Render the 'home' view using Handlebars
  res.render('home.handlebars', { title: 'Express Handlebars Example' });
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
