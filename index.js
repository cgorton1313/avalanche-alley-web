const express = require('express')
const path = require('path')
const config = require(__dirname + '/config.js')
const aaData = require(__dirname + '/aa-data.js')

const app = express()

// send all the static stuff
app.use(express.static(path.join(__dirname + '/public')))

// homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/index.html'));
})

app.get('/avy-obs', async function (req, res) {
    let avyData = await aaData.getAvyData()
    res.json(avyData)
})

app.listen(config.app.port, () => {
    console.log(`Avalanche Alley server listening at http://localhost:${config.app.port}`);
})