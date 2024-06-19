import { create, read, update, deletePes} from './modelPessoa.js';
//realizando insert (creaate)

export async function createcadastrarPessoa(req, res){
    const {nome, cpf, endereco, bairro, complemento, no_app, dat_nasc, telefone, e_mail, profissao} = req.body;
    console.log('DADOS RECEBIDOS DO FRONT-END:', {nome, cpf, endereco, bairro, complemento, no_app, dat_nasc, telefone, e_mail, profissao});

    create(nome, cpf, endereco, bairro, complemento, no_app, dat_nasc, telefone, e_mail, profissao, (err, result) => {
        if (err){
            res.status(500).json({ error: err.menssage });
            return;
        }
        res.status(201).json({mensagem: 'CADASTRO DE PESSOA CRIADO COM SUCESSO!!'});

    });
}
//Realizando consulta (read)
export async function getAllcadastrarPessoa(req, res){
read((err, cadastrarPessoa) => {
    if (err) {
        res.status(500).json({error: err.menssage});
        return;
    }
    res.json(cadastrarPessoa);
});
}
//realizando atualizando (update)
export async function updateCadastrarPessoa(req, res){
    const {id} = req.params;
    const novosDados = req.body;
    update(id, novosDados, (err, result) => {
        if (err){
            res.status(500).json({ error: err.message});
            return;
        }
        res.send('CADASTRO DE PESSOA ATUALIZADA COM SUCESSO!!!');

    });
}
//RELIZANDO DELETE (UPDATE/INATIVANDO)
export async function deletecadastrarPessoa(req, res){
    const {id} = req.params;
    deletePes(id, (err, result) => {
    
        if (err){
            res.status(500).json({ error: err.message});
            return;
        }
        res.send('CADASTRO DE PESSOA DELETADA COM SUCESSO!!!');

    });
}
