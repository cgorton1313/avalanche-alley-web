const express = require('express')
const app = express()
const path = require('path')
const config = require(__dirname + '/config.js')
const aaData = require(__dirname + '/aa-data.js')

// send all the static stuff
app.use(express.static(path.join(__dirname + '/public')))

// homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/index.html'));
})

app.get('/avy-obs', async function (req, res) {
    let someData = await aaData.sqlRealDeal()
    console.log(someData)
    res.json(someData)
})

app.listen(41111, () => {
    console.log(`Avalanche Alley server listening at http://localhost:${config.app.port}`);
})