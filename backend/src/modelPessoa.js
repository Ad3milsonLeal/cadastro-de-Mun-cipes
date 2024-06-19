import connection from './conexao.js';

export function read(callback){
 connection.query('SELECT * from cadastramento WHERE ativo = 1', callback);
 
}
export function create(nome, cpf, endereco, bairro, complemento, no_app, dat_nasc, telefone, e_mail, profissao, callback) {
    connection.query('SELECT * FROM cadastramento WHERE cpf = ?', [cpf], (error, results) => {
        if (error) {
            callback(error);
        } else if (results.length > 0) {
            callback(new Error('CPF já cadastrado'));
        } else {
            connection.query(
                'INSERT INTO cadastramento (nome, cpf, endereco, bairro, complemento, no_app, dat_nasc, telefone, e_mail, profissao, ativo) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 1)',
                [nome, cpf, endereco, bairro, complemento, no_app, dat_nasc, telefone, e_mail, profissao],
                callback
            );
        }
    });
}

export function update(id, novosDados, callback){
    const { nome, cpf, endereco, bairro, complemento, no_app, dat_nasc, telefone, e_mail, profissao } = novosDados;
    connection.query('UPDATE cadastramento SET nome = ?, cpf = ?, endereco = ?, bairro = ?, complemento = ?, no_app = ?, dat_nasc = ?, telefone = ?, e_mail = ?, profissao = ? WHERE idCadastramento = ?', 
    [nome, cpf, endereco, bairro, complemento, no_app, dat_nasc, telefone, e_mail, profissao, id], callback);

}
export function deletePes(id, callback){
    connection.query('UPDATE cadastramento SET ativo = 0 WHERE idCadastramento = ?', [id], callback);
}
