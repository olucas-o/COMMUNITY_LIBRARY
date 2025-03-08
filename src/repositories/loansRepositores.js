import db from "../config/database.js";

db.run(`
    CREATE TABLE IF NOT EXISTS loans  (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        bookId INTEGER,
        userId INTEGER,
        dueDate DATE,
        FOREIGN KEY (userId) REFERENCES users(id),
        FOREIGN KEY (dueDate) REFERENCES users(id)
    )
`);

function createLoanRepository(bookId ,userId, dueDate){
    return new Promise((res, rej) =>{
        db.run(`
            INSERT INTO loans (bookId, userId, dueDate)
            VALUES (?, ?, ?)
            `,
            [bookId, userId, dueDate], 
            function(err) {
                if (err) {
                    rej(err)
                } else {
                    
                    res({id: this.lastID, bookId, userId, dueDate  })
                }
            }
        );
    })
}

function findAllLoansRepository(){
    return new Promise((res,req)=>{
        db.all(`
            SELECT loans.id, loans.duedate, users.email, books.title, users.userName
            FROM loans
            JOIN users ON loans.userid = users.id
            JOIN books ON loans.bookid = books.id

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
            SELECT id, bookId, userId, dueDate FROM loans
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
