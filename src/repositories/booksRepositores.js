import Book from '../models/books.js';

function createBookRepository(newBook, idUser) {
    const bookToCreate = {
        ...newBook,
        idUser: idUser
    };
    return Book.create(bookToCreate);
}

function findAllBooksRepository() {
    return Book.find().populate('idUser', 'userName email'); 
}
function findBookByIdRepository(id) {
    return Book.findById(id).populate('idUser', 'userName email');
}

function updateBookRepository(id, book) {
    return Book.findByIdAndUpdate(id, book, { new: true });
}

function deleteBookByIDRepository(id) {
    return Book.findByIdAndDelete(id);
}

function searchBookRepository(search) {
    return Book.find({
        $or: [
            { title: { $regex: search, $options: 'i' } },
            { author: { $regex: search, $options: 'i' } }
        ]
    }).populate('idUser', 'userName email');
}

export default {
    createBookRepository,
    findAllBooksRepository,
    findBookByIdRepository,
    updateBookRepository,
    deleteBookByIDRepository,
    searchBookRepository
};
