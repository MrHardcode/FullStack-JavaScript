const filepath = process.argv[2];

const fs = require("fs");

const file = fs.readFileSync(filepath).toString();
const newLineArray = file.split("\n");
console.log(newLineArray.length - 1);

//console.log(fs.readFileSync(process.argv[2], 'utf8').split("\n").length -1 );

