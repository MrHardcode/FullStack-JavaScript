const args = {};
args.path = process.argv[2];
args.extension = "." + process.argv[3];

const fs = require("fs");
const path = require("path");




fs.readdir(args.path, 'utf8',(err, list) =>{
    if (err) {
        console.log("Error");
    } else {
        list.forEach((currentFileName)=>{
            if (path.extname(currentFileName) == args.extension) {
                console.log(currentFileName);
            }
        })
    }
});