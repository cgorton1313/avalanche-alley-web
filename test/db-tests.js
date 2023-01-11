const aaData = require('../aa-data.js');

async function getAvyData() {
  // here you can call a function that is in aa-data.js and wait for the result
  let someData = await aaData.sqlRealDeal();
  console.log(someData);
  // inspect the log to see what kind of object you got back
}

getAvyData();
