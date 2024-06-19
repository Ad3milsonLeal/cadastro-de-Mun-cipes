import React, { useState, useEffect } from "react";
import '../css/Deletar.css';

function DeletarCadastro() {
    const [id, setId] = useState("");
    const [isDeleted, setIsDeleted] = useState(false);

    const handleChange = (e) => {
        setId(e.target.value);
    };

    const handleDelete = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:3000/CadastrarPessoa/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (response.ok) {
                setIsDeleted(true);
            } else {
                alert("!!! ERRO AO EXCLUIR DADOS !!!");
            }
        } catch (err) {
            console.error("!!! ERRO AO EXCLUIR DADOS !!!", err);
        }
    };

    useEffect(() => {
        if (isDeleted) {
            alert("!!! CADASTRO EXCLUÍDO COM SUCESSO !!!");
            setId("");
            setIsDeleted(false);
        }
    }, [isDeleted]);

    return (
        <div className="App">
            <header>!!! DELETAR CADASTRO !!!</header>
                <br />
            <form onSubmit={handleDelete}>

                <label>ID DO CADASTRO: </label>
                <input type="number" value={id} onChange={handleChange} required />
                <br />
                <br />
                <button type="submit">DELETAR CADASTRO</button>
            </form>
        </div>
    );
}

export default DeletarCadastro;
