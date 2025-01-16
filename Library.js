const myLibrary = [];


document.addEventListener("DOMContentLoaded", () => {
    let addButton = document.querySelector(".addBook");
    addButton.addEventListener("click", () => {
        let title = document.querySelector('#title').value;
        let author = document.querySelector('#author').value;
        let pages = document.querySelector('#pages').value;
        let read = document.querySelector('#read').value;

        if(read === "on"){
            read = true;
        }
        else{
            read = false;
        }

        let book = new Book(title, author, pages, read);
        addBookToLibrary(book);
        console.log(myLibrary);
        console.log(book);

        displayBooks();
        clearFields();
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

function clearFields() {
  document.querySelector('#title').value = '';
  document.querySelector('#author').value = '';
  document.querySelector('#pages').value = '';
  document.querySelector('#read').checked = false;


}
function displayBooks() {
    let table = document.querySelector('table');
    let tbody = document.querySelector('tbody');
    tbody.innerHTML = '';
    myLibrary.forEach((book,index) => {
        let row = tbody.insertRow();
        let title = row.insertCell(0);
        let author = row.insertCell(1);
        let pages = row.insertCell(2);
        let read = row.insertCell(3);
        let remove = row.insertCell(4);

        title.innerHTML = book.title;
        author.innerHTML = book.author;
        pages.innerHTML = book.pages;
        read.innerHTML = book.read;
        remove.innerHTML = '<button class="remove">Remove</button>';

        remove.querySelector('.remove').addEventListener('click', () => {
            removeBook(index);
        });
    });
}
function removeBook(index) {
    myLibrary.splice(index, 1);
    displayBooks();
}


