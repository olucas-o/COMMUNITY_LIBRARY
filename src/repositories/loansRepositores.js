import Loan from '../models/loans.js';

function createLoanRepository(bookId, userId, dueDate) {
    return Loan.create({
        bookId,
        userId,
        dueDate
    });
}

function findAllLoansRepository() {
    return Loan.find()
        .populate({
            path: 'userId',
            select: 'userName email' 
        })
        .populate({
            path: 'bookId',
            select: 'title author' 
        });
}

function findLoansByIdRepository(id) {
    return Loan.findById(id);
}

function deleteLoanByIDRepository(id) {
    return Loan.findByIdAndDelete(id);
}

function findLoansByUserRepository(userId) {
    return Loan.find({ userId: userId })
        .populate('bookId', 'title author');
}


export default {
    createLoanRepository,
    findAllLoansRepository,
    findLoansByIdRepository,
    deleteLoanByIDRepository,
    findLoansByUserRepository 
};