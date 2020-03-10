interface IBook {
    title: string
    readonly author: string
    published?: Date
    pages?: Number
}

function printIBook(iBook: IBook) {
    console.log(
        `\n\tTitle: ${iBook.title}
        Author: ${iBook.author}
        Published: ${iBook.published}
        Page count: ${iBook.pages}`
    );
}
//const book: IBook
const book = { title: "Think Java",
 author: "Allen Downey", published: new Date(2004, 1, 1), pages: 326};
const book2: IBook = { title: "Some book", author: "Johnny Ringo"}
/**
 * TypeScript uses "Duck Typing" to check if objects have the same type 
 * matching names. So even though I didn't specify that book is an IBook 
 * the Duck Typing checks it and sees that all the properties in the object
 * match the signature of an IBook and therefore the book is accepted as a 
 * parameter for the printIBook function.
 */

book2.pages = 200;
//book2.author = "No one"; - create compiling error
printIBook(book);
printIBook(book2);

class Book implements IBook {
    title: string;
    author: string;

    constructor(title: string, author: string) {
        this.title = title;
        this.author = author;
    }
}

const book3 = new Book("Another book", "Your boi");
printIBook(book3);