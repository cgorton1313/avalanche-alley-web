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

    // homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/index.html'));
    });
    
    app.listen(41111, () => {
        console.log('server listening at http://localhost:41111');
        });