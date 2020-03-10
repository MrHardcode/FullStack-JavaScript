interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return `Hello, ${person.firstName} ${person.lastName}`
}

let user = { firstName: "Johnny", lastName: "Ringo"};

console.log(greeter(user));