const args = process.argv;

let result = 0;
for (i = 2; i < args.length; ++i){
    result += +args[i];
}
console.log(result);
