const fetch = require("node-fetch");
var now = require("performance-now")

const URL = "https://swapi.co/api/people/";

/* Exercise 3 serial */

async function fetchPerson(url){
    const data = await fetch(url).then(res => res.json());
    return data;
}

async function printNamesSerial() {
    var start = now()
    console.log("Before");
    const person1 = await fetchPerson(URL+'1');
    const person2 = await fetchPerson(URL+'2');
    console.log(person1.name);
    console.log(person2.name);
    console.log("After all"); 
    var end = now()
    console.log("ms at beginning of function:",start.toFixed(3))
    console.log("ms passed since beginning:",(end-start).toFixed(3))
}

//printNamesSerial();

/* Exercise 3 parallel */

async function fetchPerson(url){
    const data = await fetch(url).then(res => res.json());
    return data;
}

async function printNamesParallel() {
    var start = now()
    console.log("Before");
    const promise1 = fetchPerson(URL+'1');
    const promise2 = fetchPerson(URL+'2');
    const person1 = await promise1;
    const person2 = await promise2;
    console.log(person1.name);
    console.log(person2.name);
    console.log("After all"); 
    var end = now()
    console.log("ms at beginning of function:",start.toFixed(3))
    console.log("ms passed since beginning:",(end-start).toFixed(3))
}

printNamesParallel();