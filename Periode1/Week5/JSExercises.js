/**
2)  Implement user defined functions that take callbacks as an argument
Assume the JavaScript-array did not offer the filter method. 
Then you could implement it by yourself. 
a) Implement a function: myFilter(array, callback)that takes an array as the first argument, 
and a callback as the second and returns a new (filtered) array 
according to the code provided in the callback 
(that is with the same behaviour as the original filter method).
*/

function myFilter(array, callback) {
    res = []
    array.forEach(element => {
        if (callback(element)) {
            res = [...res, element];
        }
    });
    return res;
}

names = ["Johnny", "George", "Izalith", "Kalinka"];

const namesWithA = names.filter((e) => e.includes('a'));
console.log(namesWithA);
console.log("----------------------------------------------------------------\n");
const namesWithA2 = myFilter(names, (e) => e.includes('a'));
console.log(namesWithA2);
console.log("----------------------------------------------------------------\n");

 /**
b)  Implement a function: myMap(array, callback)that, provided an array and a callback, 
provides the same functionality as calling the existing map method on an array.
*/

function myMap(array, callback) {
    res = []
    array.forEach(element => {
        res = [...res, callback(element)];
    })
    return res;
}

const namesUpperCase = names.map((e) => e.toUpperCase());
console.log(namesUpperCase);
console.log("----------------------------------------------------------------\n");
const namesUpperCase2 = myMap(names, (e) => e.toUpperCase());
console.log(names);
console.log(namesUpperCase2);
console.log("----------------------------------------------------------------\n");

function myFilter2(callback) {
    res = []
    this.forEach(element => {
        if (callback(element)) {
            res = [...res, element];
        }
    });
    return res;
}

Array.prototype.myFilter = myFilter2;

const test = names.myFilter((e) => e.includes('e'));
console.log(test);
console.log("----------------------------------------------------------------\n");

function myMap2(callback) {
    res = []
    this.forEach(element => {
        res = [...res, callback(element)];
    })
    return res;
}

Array.prototype.myMap = myMap2;

test2 = names.myMap((e) => e.toLowerCase());

console.log(test2);
console.log("----------------------------------------------------------------\n");

/**
a)  Use join to create a single string from all, with names: 
comma-, space. and  # - separated.
*/

const joinedNames = names.join(',');
console.log(joinedNames);
console.log("----------------------------------------------------------------\n");
const joinedNames2 = names.join(' ');
console.log(joinedNames2);
console.log("----------------------------------------------------------------\n");
const joinedNames3 = names.join('#');
console.log(joinedNames3);
console.log("----------------------------------------------------------------\n");

/**
b)  Given this array: var numbers = [2, 3, 67, 33]; 
Create a reducer function that will return the sum (105) of all values in numbers
*/
const numbers = [2, 3, 67, 33]; 
function myReduce(array) {
    res = 0;
    array.forEach(element => {
        res += element;
    })
    return res;
}

const sum = myReduce(numbers);
console.log(sum);
console.log("----------------------------------------------------------------\n");

/**
c)  Given this array:
let members = [
 {name : "Peter", age: 18},
 {name : "Jan", age: 35},
 {name : "Janne", age: 25},
 {name : "Martin", age: 22},
]
Create a reducer function that will return the average age of all members.
*/

let members = [
    {name : "Peter", age: 18},
    {name : "Jan", age: 35},
    {name : "Janne", age: 25},
    {name : "Martin", age: 22},
]

function myReduce2(membersArray) {
    res = 0;
    membersArray.forEach(element => {
        res += element.age;
    })
    return res/membersArray.length;
}

console.log("Avg age: " + myReduce2(members));
console.log("----------------------------------------------------------------\n");

/**
d)  Imagine you were to create a system that could count votes for the presidential election 
in USA.
Given this array of votes: 
var votes = [ "Clinton","Trump","Clinton","Clinton","Trump","Trump","Trump","None"];
Create a reduce function that will return a single object like 
{Clinton: 3, Trump: 4, None: 1 }
*/

let votes = [ "Clinton","Trump","Clinton","Clinton","Trump","Trump","Trump","None"];

const voteResult = votes.reduce((accumulator, value) => {
    accumulator[value] ? accumulator[value]++ : accumulator[value] = 1;
    return accumulator;
}, {})

console.log(voteResult);
console.log("----------------------------------------------------------------\n");

/**
 * Hoisting... I know what that is by now..
 */

/**
 * This... Can't be asked
 */

/**
Reusable Modules with Closures 
1) Implement and test the Closure Counter Example from today's lecture
*/

console.log("No");
console.log("----------------------------------------------------------------\n");

/**
2)  Implement a reusable function using the closure feature, that should encapsulate
information about a person (name, and age) and returns an object with the following methods:
setAge
setName
getInfo (should return a string like Peter, 45)
*/
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.getInfo = function () {
            console.log(this.name + ", " + this.age);
        };
        this.setAge = function (age) {
            this.age = age;
        };
        this.setName = function (name) {
            this.name = name;
        };
    }
}

let person1 = new Person("Johhny", 30);
person1.getInfo();
console.log("----------------------------------------------------------------\n");


class PersonES6 {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }
    getInfo = function () {
        console.log(this.name + ", " + this.age);
    };
    set name(name) {
        this._name = name;
    };
    get name() {
        return this._name;
    }
    set age(age) {
        this._age = age;
    }
    get age() {
        return this._age;
    }
}

let person2 = new PersonES6("George", 100);
person2.getInfo();
console.log("----------------------------------------------------------------\n");
console.log(person2.name);
console.log(person2.age);
console.log("----------------------------------------------------------------\n");
person2.age = 99;
console.log(person2.age);
console.log("----------------------------------------------------------------\n");
