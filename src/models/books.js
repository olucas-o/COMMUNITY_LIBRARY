import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    idUser: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    }
});

const Book = mongoose.model('books', bookSchema);

export default Book;