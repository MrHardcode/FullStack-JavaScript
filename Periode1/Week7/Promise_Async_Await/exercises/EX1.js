
/* Exercise 1a */

function makeRandoms() {
  let randomObject = {"title": "6 Secure Randoms", "randoms": []};
  require("crypto").randomBytes(48, function(err, buffer) {
    if (err) {
      console.log(err);
      return;
    }
    let secureHex = buffer.toString("hex");
    randomObject.randoms.push({ lenght: 48, random: secureHex });
    require("crypto").randomBytes(40, function(err, buffer) {
      if (err) {
        console.log(err);
        return;
      }
      let secureHex = buffer.toString("hex");
      randomObject.randoms.push({ lenght: 40, random: secureHex });
      require("crypto").randomBytes(32, function(err, buffer) {
        if (err) {
          console.log(err);
          return;
        }
        let secureHex = buffer.toString("hex");
        randomObject.randoms.push({ lenght: 32, random: secureHex });
        require("crypto").randomBytes(24, function(err, buffer) {
          if (err) {
            console.log(err);
            return;
          }
          let secureHex = buffer.toString("hex");
          randomObject.randoms.push({ lenght: 24, random: secureHex });
          require("crypto").randomBytes(16, function(err, buffer) {
            if (err) {
              console.log(err);
              return;
            }
            let secureHex = buffer.toString("hex");
            randomObject.randoms.push({ lenght: 16, random: secureHex });
            require("crypto").randomBytes(8, function(err, buffer) {
              if (err) {
                console.log(err);
                return;
              }
              let secureHex = buffer.toString("hex");
              randomObject.randoms.push({ lenght: 8, random: secureHex });
            });
          });
        });
      });
    });
  });
  return randomObject;
}

//let rndObject = makeRandoms()
//This will log an object that has no randoms added to it yet, because all the code bits that add 
//randoms to the object are asynchronous callbacks
//console.log(rndObject);

/* Exercise 1b */

function makeSecureRandom(size){
  return new Promise((resolve, reject) => {

    require("crypto").randomBytes(size, function(err, buffer) {
      if (err) {
        console.log(err);
        return reject(new Error("Promise rejected - failed to create random bytes"));
      }
      let secureHex = buffer.toString("hex");
      return resolve({ lenght: size, random: secureHex });
    });
  })
}

// let rndObject2 = {title: "6 Secure Randoms", randoms: []};
// const p1 = makeSecureRandom(48)
// const p2 = makeSecureRandom(40)
// const p3 = makeSecureRandom(36)
// const p4 = makeSecureRandom(24)
// const p5 = makeSecureRandom(16)
// const p6 = makeSecureRandom(8)
// const promises = [p1, p2, p3, p4, p5, p6];
// Promise.all(promises)
// .then((result) => {
//   console.log(result);
//   rndObject2.randoms = result
// })

function makeSecureRandoms(sizes){
  const promises = []
  sizes.forEach(element => {
    promises.push(makeSecureRandom(element))
  });
  return promises;
}

/* Exercise 1c */

exports.getSecureRandom = makeSecureRandom;
exports.getSecureRandoms = makeSecureRandoms;