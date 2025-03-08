import db from "../config/database.js";

db.run(`
    CREATE TABLE IF NOT EXISTS books (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        author TEXT UNIQUE NOT NULL,
        idUser INTERGER,
        FOREIGN KEY (idUser) REFERENCES users(id)
    )
`);

function createBookRepository(newBook,idUser){
    return new Promise((res, rej) =>{
        const { title, author } = newBook;
        db.run(`
            INSERT INTO books (title, author, idUser)
            VALUES (?, ?, ?)
            `, 
            [title, author, idUser], 
            function(err) {
                if (err) {
                    rej(err)
                } else {
                    res({id: this.lastID, ...newBook })
                }
            }
        );
    })
}

function findAllBooksRepository(){
    return new Promise((res,req)=>{
        db.all(`
            SELECT id, title, author, idUser FROM books   
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
}

function findBookByIdRepository(id){
    return new Promise((res,req)=>{
        db.get(`
            SELECT id, title, author, idUser FROM books
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

function updateBookRepository(id, book) {
    return new Promise((res, req)=> {
        const fields = ['title', 'author', 'idUser'];
        let query = 'UPDATE books SET';
        const values = [];

        fields.forEach((field) => {
            if (book[field] !== undefined) {
                query += ` ${field} = ?,`;
                values.push(book[field]);
            }
        });
        query = query.slice(0, -1);
        query += ' WHERE id = ?';
        values.push(id);

        db.run(query, values,(err) =>{
            if (err){
                req(err)
            } else {
                res({ ...book, id });
            }
        })
    })
}

function deleteBookByIDRepository(id){
    return new Promise((res,req)=>{
        db.run(`
            DELETE FROM books
            WHERE id = ?  
        `,
        [id],
        (err)=>{
            if (err){
                req(err)
            } else {
                res({message: "Book Deleted", id })
            }
        });
    })
}

function searchBookRepository(search) {
    return new Promise((res, rej) => {
    db.all(`SELECT * FROM books WHERE title LIKE ? OR author LIKE ?`,
    [`%${search}%`, `%${search}%`],
    (err, rows) => {
    if (err) rej(err);
    else res(rows);
    });
    });
}

export default {
    createBookRepository,
    findAllBooksRepository,
    findBookByIdRepository,
    updateBookRepository,
    deleteBookByIDRepository,
    searchBookRepository
}
