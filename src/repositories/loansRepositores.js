import db from "../config/database.js";

db.run(`
    CREATE TABLE IF NOT EXISTS loans  (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        bookId INTEGER,
        userId INTEGER,
        dateLoan DATE,
        FOREIGN KEY (userId) REFERENCES users(id),
        FOREIGN KEY (DateLoan) REFERENCES users(id)
    )
`);

function createLoanRepository(newLoans,userId){
    return new Promise((res, rej) =>{
        const {Bookid, Date} = newLoans
        db.run(`
            INSERT INTO loans (bookId, userId, dateLoan)
            VALUES (?, ?, ?)
            `, 
            [Bookid, userId, Date], 
            function(err) {
                if (err) {
                    rej(err)
                } else {
                    
                    res({id: this.lastID, ...newLoans })
                }
            }
        );
    })
}

function findAllLoansRepository(){
    return new Promise((res,req)=>{
        db.all(`
            SELECT * FROM loans   
        `,
        [],
        (err,row)=>{
            if (err){
                req(err)
            } else {
                res(row)
            }
        });
    })
};

function findLoansByIdRepository(id){
    return new Promise((res,req)=>{
        db.get(`
            SELECT id, bookId, userId, dateLoan FROM loans
            WHERE id = ?    
        `,
        [id],
        (err,row)=>{
            if (err){
                req(err)
            } else {
                res(row)
            }
        })
    })
}

function deleteLoanByIDRepository(id){
    return new Promise((res,req)=>{
        db.run(`
            DELETE FROM loans
            WHERE id = ?  
        `,
        [id],
        (err)=>{
            if (err){
                req(err)
            } else {
                res({message: "Loan Deleted" })
            }
        });
    })
}

export default {
    createLoanRepository,
    findAllLoansRepository,
    findLoansByIdRepository,
    deleteLoanByIDRepository
}
