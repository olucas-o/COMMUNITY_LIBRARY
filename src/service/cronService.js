import cron from 'node-cron';
import moment from 'moment';
import sendEmail  from './emailService.js';
import loansRepository from '../repositories/loansRepositores.js';

cron.schedule("00 00 * * *", async () => {
    const loans = await loansRepository.findAllLoansRepository();
    const today = moment().startOf('day');
    loans.forEach(async(loan)=> {
        const dueDate = moment(loan.dueDate).startOf('day');
        const reminderDate = dueDate.clone().subtract(1, 'days');
        if (today.isSame(reminderDate)) {
            sendEmail(loan.userName, loan.email, loan.title, dueDate);
        };
    });
});
