const fs = require("fs");

fs.readFile(process.argv[2], 'utf8', (err, data) => {
    if (err) {
        console.log("Failed to read file");
    } else {
        console.log(data.split("\n").length - 1);
    }
});




//console.log(fs.readFileSync(process.argv[2], 'utf8').split("\n").length -1 );

