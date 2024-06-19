import React, { useState, useEffect } from "react";
import '../css/Consulta.css'

function ConsultarPessoa() {
    const [cadastramento, setCadastramento] = useState([]);

    useEffect(() => {
        const fetchPessoa = async () => {
            try {
                const response = await fetch('http://localhost:3000/CadastrarPessoa');
                const json = await response.json();
                console.log('Dados recebidos:', json); // Adicionando log
                setCadastramento(json);
            } catch (err) {
                console.error("!!! ERRO AO CONSULTAR DADOS !!!", err);
            }
        };

        fetchPessoa();
    }, []);

    return (
        <div className="App">
            <center>
                <br />
                <header> !!! """ CONSULTA DE DADOS """ !!!</header><br />
                <br />
                <ul>
                    {cadastramento.map((cadastramento) => (
                        <li key={cadastramento.id}>
                            ID: {cadastramento.idCadastramento} - Nome: {cadastramento.nome} - CPF: {cadastramento.cpf} 
                            - Endereço: {cadastramento.endereco} - Bairro: {cadastramento.bairro} 
                            - Complemento: {cadastramento.complemento} 
                            - Nº_app: {cadastramento.no_app} - Data de Nascimento: {cadastramento.dat_nasc} 
                            - Telefone: {cadastramento.telefone} - E-mail: {cadastramento.e_mail} - Profissao: {cadastramento.profissao}
                        </li>
                    ))}
                </ul>.
            </center>
        </div>
    );
}

export default ConsultarPessoa;
