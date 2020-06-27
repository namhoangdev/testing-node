const express = require('express');
const path = require('path');

const app = express();
const server = require('http').Server(app);

// server
app.use(express.static(path.join(__dirname, '/build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/build/index.html'));
});
const port = process.env.PORT || 3001;
server.listen(port);

console.log('App is listening on port ', port);