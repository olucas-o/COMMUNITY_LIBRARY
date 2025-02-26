import bookReposotorie from '../repositories/booksRepositores.js';


async function createBooksService(newBook, userId) {
    const book = await bookReposotorie.createBookRepository(newBook, userId);
    return book;
}

async function findAllBooksService() {
    const books = await bookReposotorie.findAllBooksRepository();
    return books;
}

async function findBookByIdService(id) {
    const book = await bookReposotorie.findBookByIdRepository(id);
    if (!book) {
        throw new Error('Book not found');
    }
    return book;
}

async function updateBookServise (newBook, bookId, userId) {
    const book = await bookReposotorie.findBookByIdRepository(bookId);
    if(!book) throw new Error("Book not exist");
    if(book.idUser !== userId) throw new Error("Unauthorized");
    const bookUpdated = bookReposotorie.updateBookRepository(bookId, newBook);
    console.log(bookUpdated)
    return (bookUpdated)
}

async function deleteBookService(bookId, userId) {
    const book = await bookReposotorie.findBookByIdRepository(bookId);
    if(!book) throw new Error("book not exist");
    if(book.idUser !== userId) throw new Error("Unauthorized");
    const {message} = await bookReposotorie.deleteBookByIDRepository(bookId);
    return message;
}

async function searchBookService(search) {
    if (!search) {
    return bookReposotorie.findAllBooksRepository();
    }
    return bookReposotorie.searchBookRepository(search);
}    

export default {
    createBooksService,
    findAllBooksService,
    findBookByIdService,
    updateBookServise,
    deleteBookService,
    searchBookService
}
