import mongoose from 'mongoose';

const loanSchema = new mongoose.Schema({
    bookId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'books',
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user', 
        required: true
    },
    dueDate: {
        type: Date,
        required: true
    },
    loanDate: {
        type: Date,
        default: Date.now 
    }
});

const Loan = mongoose.model('loans', loanSchema);

export default Loan;