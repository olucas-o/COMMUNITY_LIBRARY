import loanService from '../service/loanService.js';

async function createLoanController (req, res) {
    const { bookId, dueDate }  = req.body;
    const userId = req.userId;
    try {
        const loansCreated = await loanService.createLoansService(bookId, userId, dueDate);
        res.status(201).send({loansCreated});
    } catch (err) {
        res.status(400).send({ message: err.message });
    };
};

async function findAllLoansController(req, res) {
    try {
        const allLoans = await loanService.findAllLoansService();
        res.send({ allLoans });
    } catch (e) {
        res.status(400).send(e.message);
    }
}

async function findLoanByIdController(req, res) {
    const loanId  = req.params.id;
   try {
       const loan = await loanService.findLoansByIdService(loanId);
       res.send({ loan });
   } catch (error) {
       if (error.message === 'Loan not found') {
           res.status(404).send({ error: 'Loan not found' });
       }
   }
}

async function deleteBLoanContreller(req, res) {
    const loanId = req.params.id;
    const userId = req.userId
    try{
        const message = await loanService.deleteLoanService(loanId,userId)
        res.send({ message })
    }catch(e){
        res.status(400).send( e.message );
    }
}

export default {
    createLoanController,
    findAllLoansController,
    findLoanByIdController,
    deleteBLoanContreller
}