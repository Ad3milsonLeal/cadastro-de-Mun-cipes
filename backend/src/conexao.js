import mysql from 'mysql';


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'sistema'
});

connection.connect((err) =>{
if (err){
    console.error('ERRO AO REALIZAR CONEXÃO COM O BD:', err);
    throw err;
}
console.log('CONEXÃO COM O BD ESTABELECIDA COM SUCESSO!');
});

export default connection;