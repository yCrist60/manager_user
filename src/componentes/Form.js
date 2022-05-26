import { useState } from "react"
import { path } from "../config/path"

let n = "";
let e = "";
let c = "";
let t = "";
let i = "";
let u = "";
let s = "";




export default function Form(){
    const [nome,setNome]=useState("");
    const [email,setEmail]=useState("");
    const [cpf,setCPF]=useState("");
    const [telefone,setTelefone]=useState("");
    const [idade,setIdade]=useState("");
    const [usuario,setUsuario]=useState("");
    const [senha,setSenha]=useState("");
    




    return(
        <div className ="form">
            <h2>Cadasro de Cliente</h2>

 
            <div class="mb-3">
                <label htmlFor="NomeCompleto" className="form-label">Nome Completo</label>
                <input type="text" 
                    class="form-control" 
                    id="NomeCompleto" 
                    placeholder="Nome do Cliente"
                    value={nome}
                    onChange={(value)=>setNome(value.target.value)}
                />
            </div>
            <div class="mb-3">
                <label htmlFor="Usuario" className="form-label">Email</label>
                <input type="email" 
                className="form-control" 
                id="Usuario" 
                placeholder="E-Mail"
                value={email}
                onChange={(value)=>setEmail(value.target.value)}
                />
            </div>
            <div class="mb-3">
                <label htmlFor="CPF" className="form-label">CPF</label>
                <input type="text"
                className="form-control" 
                id="CPF" 
                placeholder="CPF"
                value={cpf}
                onChange={(value)=>setCPF(value.target.value)}
                />
            </div>
            <div class="mb-3">
                <label htmlFor="Telefone" className="form-label">Telefone</label>
                <input type="tel" 
                className="form-control" 
                id="Telefone" 
                placeholder="Telefone"
                value={telefone}
                onChange={(value)=>setTelefone(value.target.value)}
                />
            </div>
            <div class="mb-3">
                <label htmlFor="Idade" className="form-label">Idade</label>
                <input type="number" 
                className="form-control" 
                id="Idade" 
                placeholder="Idade"
                value={idade}
                onChange={(value)=>setIdade(value.target.value)}
                />
            </div>
            <div class="mb-3">
                <label htmlFor="Usuario" className="form-label">Usuário</label>
                <input type="text" 
                className="form-control" 
                id="Usuario" 
                placeholder="Usúario"
                value={usuario}
                onChange={(value)=>setUsuario(value.target.value)}
                />
            </div>
            <div class="mb-3">
                <label htmlFor="Senha" className="form-label">Senha</label>
                <input type="text" 
                class="form-control" 
                id="Senha" 
                placeholder="Senha"
                value={senha}
                onChange={(value)=>setSenha(value.target.value)}
                />
            </div>

            <button onClick={()=>{
                n = nome;
                e = email;
                c = cpf;
                t = telefone;
                i = idade;
                u = usuario;
                s = senha;
                
                gravarDados();
            }} type="button" class="btn btn-secondary">Cadastrar</button>

        </div>
        
    )
}

function gravarDados() {

    fetch(`${path}/cadastro`,{

        method: 'POST',
        headers: {
            accept: 'application/json',
            "content-type":'application/json'
        },
        body: JSON.stringify({
            nome:n,
            email:e,
            cpf:c,
            telefone:t,
            idade:i,
            usuario:u,
            senha:s,
        })

    })

    .then((result)=>result.json())
    .then((data)=>{
        alert(data.output);
    })
    .catch((error)=>console.error(`Erro ao cerregar a API -> ${error}`))
    

    


}
