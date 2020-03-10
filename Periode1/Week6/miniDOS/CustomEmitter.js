const EE = require("events");

class MyEventEmitter extends EE{
    constructor(){
        super();
    }
}

const eventEmitter = new MyEventEmitter();
module.exports = eventEmitter;