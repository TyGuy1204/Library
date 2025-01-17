
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
        this.initialize();
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
                Book.toggleReadStatus();
                this.displayBooks();
            });
        });
    }
    initialize(){

        document.addEventListener('DOMContentLoaded', () => {
            const dialog = document.querySelector('dialog');
            const addButton = document.querySelector(".addBook");
            const addBookButton = document.querySelector('.show');

            addBookButton.addEventListener('click', () => {
                dialog.showModal();
            });
            addButton.addEventListener("click", () => {
                const title = document.querySelector('#title').value;
                const author = document.querySelector('#author').value;
                const pages = document.querySelector('#pages').value;
                const read = document.querySelector('#read').checked;
    
                const book = new Book(title, author, pages, read);
                this.addBookToLibrary(book);
    
    
                this.displayBooks();
                dialog.close();
                this.clearFields();
            });
        })
    }  
}

const library  = new Library();





