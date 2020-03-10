const EE = require("events");

const numbers = process.argv.slice(2).map(nas=>Number(nas));

class MyEventEmitter extends EE{
    
    _numbers = [];

    addNumber(number) {
        this._numbers.push(number);
        if (number %2 === 0) this.emit("even", {number})
        else this.emit("odd", {number})
        if (number >= 100) this.emit("high", {number})
        else this.emit("low", {number})
    }
}

const publisher = new MyEventEmitter();
publisher.on("odd", (event) => {
    console.log(`Number is odd: ${event.number}`);
})
publisher.on("even", (event) => {
    console.log(`Number is even: ${event.number}`);
})
publisher.on("low", (event) => {
    console.log(`Number is low: ${event.number}`);
})
publisher.on("high", (event) => {
    console.log(`Number is high: ${event.number}`);
})
console.log("begin");
numbers.forEach((value)=>{publisher.addNumber(value); console.log("inside");})
console.log("end");