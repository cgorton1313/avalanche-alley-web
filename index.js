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

app.get('/avy_obs', async function (req, res) {
    res.json("Hi there.");
    });

    const paintingData = [{painting_index: 283, season: 1, episode: 2, painting_title: 'Mt. McKinley'},{_painting_index: 284,get painting_index() {
            return this._painting_index;
        },
set painting_index(value) {
            this._painting_index = value;
        },
 season: 1, episode: 3, painting_title: 'Ebony Sunset'}]