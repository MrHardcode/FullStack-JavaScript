const { getSecureRandoms } = require("./EX1.js");

/* Exercise 1d */

let randomArray = getSecureRandoms([48, 36, 24, 8]);
// Promise.all(randomArray)
// .then((res)=>{
//     console.log(res);
// })

async function getSecureRandomsAsyncAwait() {
  const promises = getSecureRandoms([48, 40, 36, 24, 16, 8]);
  const res = await Promise.all(promises);
  return res;
}

/* Exercise 1e */

const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/api/securerandoms") {
    (async () => {
      res.setHeader("Content-Type", "application/json");
      const randoms = await getSecureRandomsAsyncAwait();
      const data = { title: "6 Secure Randoms", randoms: randoms };
      res.write(JSON.stringify(data));
      return res.end();
    })()
  }
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(`<h2>Simple node HTTP server demo</h2>
      <p>Exposes this endpoint <code>/api/securerandoms</code></p>
    `);
    return res.end();
  }
});

(function startServer() {
  server.listen(3000);
  console.log("Server listening af port 3000...");
})();
