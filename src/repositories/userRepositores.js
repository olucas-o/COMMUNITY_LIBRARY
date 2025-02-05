import db from '..\config\database.js'; 

db.run(`
    CREATE TABLE IF NOT EXISTS users (
    id INTERGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE NOT NULL,
    gmail TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL
    avatar TEXT
    )
`)
db.run(`
    INSERT INTO users (username, email, password, avatar)
    VALUES (?, ?, ?, ?)
    `, [username, email, password, avatar], (err) => {
    if (err) {
    reject(err);
    } else {
    resolve({ message: "Usuário criado com sucesso" });
    }
    });
    
export default {
        createUserRepository
        };
        
    