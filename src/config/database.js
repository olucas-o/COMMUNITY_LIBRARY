import sqlite3 from 'slite3'

const db = new sqlite3.Database('library_db.slite', (err)=>{
    if(err){
        console.error('Database not conect', err.menssage);
    } else {
        console.log('Database conect');
    } 
})
export default db;