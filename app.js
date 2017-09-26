
console.log('app.js');

const fs = require('fs');
const os = require('os');
const notes = require('./notes');

const user = os.userInfo();
const res = notes.addNote();
const sum = notes.add(-5, 6);
console.log(sum);
fs.appendFileSync('greetings.txt', `Test1 ${user.username} ${res} \n`);








