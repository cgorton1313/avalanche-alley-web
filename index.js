const express = require('express');
const app = express();
const path = require('path');
const config = require(__dirname + '/config.js');
// put all requires at the top of the file

// send all the static stuff
app.use(express.static(path.join(__dirname + '/public')));

// homepage
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.listen(41111, () => {
  console.log(`Avalanche Alley server listening at http://localhost:${config.app.port}`);
});

app.get('/avy-obs', async function (req, res) {
  const aaData = [{ painting_index: 283, season: 1, episode: 2, painting_title: 'Mt. McKinley' }]
  res.json(aaData);
});

