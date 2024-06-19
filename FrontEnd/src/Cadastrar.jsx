import React, { useState, useEffect } from "react";
import '../css/Cadastro.css';

function FormCadastro() {
    const [formValores, setFormValores] = useState({
        nome: '',
        cpf: '',             
        endereco: '',
        bairro: '',
        complemento: '',
        no_app: '',
        dat_nasc: '',
        telefone: '',
        e_mail: '',
        profissao: '',

    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {

        const { name, value } = e.target;
        setFormValores(prevState => ({
            ...prevState,
            [name]: value
        }))
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log(formValores);
            const response = await fetch('http://localhost:3000/cadastrarPessoa', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formValores)          
                 
            });
            if (response.ok) {
                setIsSubmitted(true);
            } else {
                alert("CPF JÁ CADASTRADO! ");
            }

            const json = await response.json();
            console.log(response)
            console.log(json);
        } catch (err) {
            console.error("CPF JÁ CADASTRADO!", err)

        }
    };

    useEffect(() => {
        if (isSubmitted) {
            alert(" CADASTRO REALIZADO COM SUCESSO!");
            setFormValores({
                id: "",
                nome: "",
                cpf: "",
                endereco: "",
                bairro: "",
                complemento: "",
                no_app: "",
                dat_nasc: "",
                telefone: "",
                e_mail: "",
                profissao: ""
            });
            setIsSubmitted(false);
        }
    }, [isSubmitted]);
   
    return (
        <form onSubmit={handleSubmit}>
            <center>
                <div className="App">
                    <div>
                        <label> NOME: </label>
                        <input type="text" name="nome" defaultValue={formValores.nome} onChange={handleChange} required/>

                    </div>
                    <br />           
                    
                    <div>
                        <label> CPF: </label>
                        <input type="text" name="cpf" defaultValue={formValores.cpf} onChange={handleChange} required/>
                    </div>
                    <br />

                    <div>
                        <label> ENDEREÇO: </label>
                        <input type="text" name="endereco" defaultValue={formValores.endereco} onChange={handleChange} required/>
                    </div>
                    <br />

                    <div>
                        <label> BAIRRO: </label>
                        <input type="text" name="bairro" defaultValue={formValores.bairro} onChange={handleChange} required/>
                    </div>
                    <br />
                    <div>
                        <label> COMPLEMENTO: </label>
                        <input type="text" name="complemento" defaultValue={formValores.complemento} onChange={handleChange} required/>
                    </div>
                    <br />
                    
                    <div>
                        <label> NÚMERO: </label>
                        <input type="text" name="no_app" defaultValue={formValores.no_app} onChange={handleChange} required/>
                    </div>
                    <br />
                    <div>
                        <label> DATA_NASCIMENTO: </label>
                        <input type="date" name="dat_nasc" defaultValue={formValores.dat_nasc} onChange={handleChange} required/>
                    </div>
                    <br />
                    <div>
                        <label> TELEFONE: </label>
                        <input type="text" name="telefone" defaultValue={formValores.telefone} onChange={handleChange} required/>
                    </div>
                    <br />
                    <div>
                        <label> E_MAIL: </label>
                        <input type="text" name="e_mail" defaultValue={formValores.e_mail} onChange={handleChange} required/>
                    </div>
                    <br />
                    <div>
                        <label> PROFISSÃO: </label>
                        <input type="text" name="profissao" defaultValue={formValores.profissao} onChange={handleChange} required/>
                    </div>
                    <br />
                    <div>
                        <br />
                        <button type="submit"> CADASTRAR </button> 
                       
                    </div>
                </div>
            </center>
        </form>

    )
}

export default FormCadastro;
