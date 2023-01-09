
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


app.get('/avy-obs', async function (req, res) {
    const aaData = [{ avrid: 1, avpathid: 'SHED10', avobsdata: '2012-03-26', avobstime: '12:45:00', avobserverid: 'stein_01', avtype: 'WS', avtriggertyp: 5, avcomment: 'Wet slab released on SE aspect @ 5400 feet (1636 m) elevation. Debris ran 2/3rds path to at least 4,600 feet (1394 m) elevation.' },
    { avrid: 2, avpathid: 'PATH1163', avobsdata: '2012-03-16', avobstime: '08:30:00', avobserverid: 'stein_01', avtype: 'U', avtriggertyp: 5, avcomment: '	Wet debris ran 2/3 path in main path to 4700 feet (1424 m) elevation. Upper SZ obscured.' }]
    res.json(aaData);
});








//put last 
app.listen(41111, () => {
    console.log(`Avalanche Alley server listening at http://localhost:${config.app.port}`);
});