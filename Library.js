const myLibrary = [];


document.addEventListener("DOMContentLoaded", () => {
    let button = document.querySelector("button");
    button.addEventListener("click", () => {
        let title = document.querySelector('#title').value;
        let author = document.querySelector('#author').value;
        let pages = document.querySelector('#pages').value;
        let read = document.querySelector('#read').value;
        let book = new Book(title, author, pages, read);
        addBookToLibrary(book);
        console.log(myLibrary);
        console.log(book);
    }); 
});



function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}


