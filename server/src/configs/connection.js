import mysql from 'mysql';
const conn = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'crispy_system'
});
export default conn;
