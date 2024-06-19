 const app = express();
import  cors from 'cors';
import  express from 'express';
 
    import {getAllcadastrarPessoa, createcadastrarPessoa, updateCadastrarPessoa, deletecadastrarPessoa} from "./CadastroController.js";

    app.use(express.json());
    app.use(cors());

    app.get('/cadastrarPessoa', getAllcadastrarPessoa);
    app.post('/cadastrarPessoa', createcadastrarPessoa);
    app.put('/cadastrarPessoa/:id', updateCadastrarPessoa);
    app.delete('/cadastrarPessoa/:id', deletecadastrarPessoa);

    app.listen(3000, () => {
        console.log(`SERVIDOR RODANDO COM SUCESSO NA PORTA 3000`);
    });
