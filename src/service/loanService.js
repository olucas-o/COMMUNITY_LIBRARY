import  loansRepositores  from '../repositories/loansRepositores.js';

async function createLoansService(newLoans, userId) {
    const loansCreated = await loansRepositores.createLoanRepository(newLoans, userId);
    return loansCreated;
};

async function findAllLoansService() {
    const allLoans = await loansRepositores.findAllLoansRepository();
    return allLoans;
};

async function findLoansByIdService(id) {
    const loans = await loansRepositores.findLoansByIdRepository(id);
    if (!loans) {
        throw new Error('Loans not found');
    }
    return loans;
}

async function deleteLoanService(loandId, userId) {
    const loans = await loansRepositores.findLoansByIdRepository(loandId);
    if(!loans) throw new Error("loans not exist");
    if(loans.userId !== userId) throw new Error("Unauthorized");
    const {message} = await loansRepositores.deleteLoanByIDRepository(loandId);
    return message;
}

export default {
    createLoansService,
    findAllLoansService,
    findLoansByIdService,
    deleteLoanService
}
