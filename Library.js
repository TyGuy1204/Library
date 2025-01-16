const myLibrary = [];


document.addEventListener("DOMContentLoaded", () => {

    const dialog = document.querySelector('dialog');
    const addBookButton = document.querySelector('.show');


    addBookButton.addEventListener('click', () => {
        dialog.showModal();
    });

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
        dialog.close();
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
        let toggleRead = row.insertCell(5);

        title.innerHTML = book.title;
        author.innerHTML = book.author;
        pages.innerHTML = book.pages;
        read.innerHTML = book.read;
        remove.innerHTML = '<button class="remove">Remove</button>';
        toggleRead.innerHTML = '<button class="toggleRead">Toggle Read Status</button>';

        remove.querySelector('.remove').addEventListener('click', () => {
            removeBook(index);
        });
        toggleRead.querySelector('.toggleRead').addEventListener('click', () => {
            book.toggleReadStatus();
            displayBooks();
        });
    });
}
Book.prototype.toggleReadStatus = function() {
    this.read = !this.read;
}
function removeBook(index) {
    myLibrary.splice(index, 1);
    displayBooks();
}


