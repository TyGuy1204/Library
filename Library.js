
class Book{
    constructor(title,author,pages,read){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
    toggleReadStatus(){
        this.read = !this.read;
    }
}

class Library{
    constructor(){
        this.library = [];
    }
    addBookToLibrary(Book){
        this.library.push(Book);
    }
    removeBook(index) {
        this.library.splice(index, 1);
        this.displayBooks();
    }
    clearFields() {
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#pages').value = '';
        document.querySelector('#read').checked = false;
    }
    displayBooks() {
        let tbody = document.querySelector('tbody');
        tbody.innerHTML = '';
        this.library.forEach((Book,index) => {
            let row = tbody.insertRow();
            let title = row.insertCell(0);
            let author = row.insertCell(1);
            let pages = row.insertCell(2);
            let read = row.insertCell(3);
            let toggleRead = row.insertCell(4);
            let remove = row.insertCell(5);
    
            title.innerHTML = Book.title;
            author.innerHTML = Book.author;
            pages.innerHTML = Book.pages;
            read.innerHTML = Book.read;
            remove.innerHTML = '<button class="remove">Remove</button>';
            toggleRead.innerHTML = '<button class="toggleRead">Toggle</button>';
    
            remove.querySelector('.remove').addEventListener('click', () => {
                this.removeBook(index);
            });
            toggleRead.querySelector('.toggleRead').addEventListener('click', () => {
                this.Book.toggleReadStatus();
                this.displayBooks();
            });
        });
    }
}

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








