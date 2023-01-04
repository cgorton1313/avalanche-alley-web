const express = require('express');
const app = express();
const path = require('path');
// put all requires at the top of the file


// homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/index.html'));
    });

    app.listen(41111, () => {
        console.log('server listening at http://localhost:41111');
        });