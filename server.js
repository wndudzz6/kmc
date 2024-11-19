const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', '/list.html'));
});

app.listen(8080, () => {
  console.log('Server is running on http://localhost:8080');
});