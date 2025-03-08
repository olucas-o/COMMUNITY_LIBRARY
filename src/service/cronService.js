import cron from 'node-cron';
import moment from 'moment';
import sendEmail  from './emailService.js';
import loansRepository from '../repositories/loansRepositores.js';
import userRpositore from '../repositories/userRepositores.js';
import bookRepositore from '../repositories/booksRepositores.js';

cron.schedule("00 00 * * *", async () => {
    
    const loans = await loansRepository.findAllLoansRepository();
    const today = moment().startOf('day');
    loans.forEach(async(loan)=> {
        const dueDate = moment(loan.dateLoan).startOf('day');
        const reminderDate = dueDate.clone().subtract(1, 'days');
        const emailLoan = await userRpositore.findUserByIdRepository(loan.userId);
        const bookNameloan = await bookRepositore.findBookByIdRepository(loan.bookId);
        if (today.isSame(reminderDate)) {
            sendEmail(emailLoan.username,emailLoan.email, bookNameloan.bookname, dueDate);
        }
    })
});

