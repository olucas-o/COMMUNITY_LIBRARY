import booksService from "../service/booksService.js";

async function createBookController (req, res) {
    const newBook = req.body;
    const userId = req.userId;
    try {
        const book = await booksService.createBooksService(newBook, userId);
        res.status(201).send({book});
    } catch (err) {
        res.status(400).send({ message: err.message });
    }
}

async function findAllBooksController(req, res) {
    try {
        const books = await booksService.findAllBooksService();
        res.send({ books });
    } catch (e) {
        res.status(400).send(e.message);
    }
}

async function findBookByIdController(req, res) {
    const id  = req.params.id;
   try {
       const book = await booksService.findBookByIdService(id);
       res.send({ book });
   } catch (error) {
       if (error.message === 'Book not found') {
           res.status(404).send({ error: 'Book not found' });
       }
   }
}

async function updateBookController(req, res) {
    const bookId = req.params.id;
    const userId = req.userId;
    const newBook = req.body;
    try{
        const book = await booksService.updateBookServise(newBook, bookId ,userId)
        res.send({book})
    } catch (e){
        res.status(400).send( e.message );
    }
}

async function deleteBookContreller(req, res) {
    const { id } = req.params;
    const userId = req.userId
    try{
        const message = await booksService.deleteBookService(id,userId)
        res.send({ message })
    }catch(e){
        res.status(400).send( e.message );
    }
}

async function searchBooksController(req, res) {
    const { search } = req.query;
    try {
    const books = await booksService.searchBookService(search);
    res.send(books);
    } catch (e) {
        res.status(400).send( e.message );
    }
}

export default {
    createBookController,
    findAllBooksController,
    findBookByIdController,
    updateBookController,
    deleteBookContreller,
    searchBooksController
}