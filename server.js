const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Serve the microfrontend projects
app.use(express.static(path.join(__dirname, 'microfrontend1')));
app.use(express.static(path.join(__dirname, 'microfrontend2')));

// Serve the React.js microfrontend
app.use(express.static(path.join(__dirname, 'react-microfrontend')));

// Handle requests for the React.js microfrontend
app.get('/react-microfrontend', (req, res) => {
  res.sendFile(path.join(__dirname, 'react-microfrontend', 'index.html'));
});


// Handle requests for microfrontend1
app.get('/microfrontend1', (req, res) => {
  res.sendFile(path.join(__dirname, 'microfrontend1', 'index.html'));
});

// Handle requests for microfrontend2
app.get('/microfrontend2', (req, res) => {
  res.sendFile(path.join(__dirname, 'microfrontend2', 'index.html'));
});

// Handle login page request
app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'login.html'));
});

// Handle login form submission
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Check username and password
  if (username === 'a' && password === '1') {
    // Redirect to the home page upon successful login
    res.redirect('/home');
  } else {
    // Redirect back to the login page with an error message
    res.redirect('/login?error=invalid_credentials');
  }
});

// Handle requests for the home page
app.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, 'home.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
