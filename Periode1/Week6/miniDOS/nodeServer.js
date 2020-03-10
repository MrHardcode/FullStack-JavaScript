const info = require("./OS-info");
const DOSDetector = require("./dosDetector");
const ee = require("./CustomEmitter.js");

const http = require('http');
const dosDetector = new DOSDetector(1000);
const server = http.createServer((req, res) => {
  if (req.url === '/api/os-info') {
    res.setHeader('Content-Type', 'application/json');
    res.write(JSON.stringify(info))
    return res.end();
  }
  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write(`<h2>Simple node HTTP server demo</h2>
      <p>Exposes this endpoint <code>/api/os-info</code></p>
    `);
    return res.end();
  }
});

ee.on("DOSDetected", (event) => {
    console.log("DOS detected!");
    console.log("DOS URL:", event.url);
    console.log("Time since last request:", event.timeBetweenCalls);
})

server.on('connection', (sock) => {
  // You can get the client-IP in here, using sock.remoteAddress)
    dosDetector.addUrl(sock.remoteAddress)
});

server.listen(3000);
console.log('listening on 3000');
//Register for the "DosDetected" event and console.log the url and time info.
