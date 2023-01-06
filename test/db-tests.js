const aaData = require('../aa-data.js');
let someData = aaData.sqlTest();
console.log(someData);

async function testSomething() {
    // here you can call a function that is in aa-data.js and wait for the result
    let someData = await aaData.sqlTest();
    console.log(someData);
    // inspect the log to see what kind of object you got back
    }
    
    testSomething();
    module.exports = {
        sqlTest
      }