const DOSDetector = require("./dosDetector.js");
const ee = require("./CustomEmitter.js");

const dosDetector = new DOSDetector(2000);

ee.on("DOSDetected", (event) => {
    console.log("DOS detected!");
    console.log("DOS URL:", event.url);
    console.log("Time since last request:", event.timeBetweenCalls);
})


dosDetector.addUrl("http://test.test");
setTimeout(()=>{
    dosDetector.addUrl("http://test.test")
}, 1200)
