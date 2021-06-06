import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import Input from "../../components/Input/";
import "./styles.css";

import api from "../../services";

function CadastroForm() {
  const [pNome,setPNome] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");


  const history = useHistory();



  function cadastro(e) {
    e.preventDefault();  
    api.post('register',{
      nome: pNome,
      email: email,
      password: password      
    }).then(()=>{
      alert("Cadastro Realizado Com Sucesso");
      history.push('/login');
    }).catch((e)=>{
      alert('Erro Cadastro Não Feito');
    })
  }

 


  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        titulo="Seja Bemvindo"
        description="O primeiro passo, é preencher esse formulário de inscrição."
      />

      <main>
        <form onSubmit={cadastro}>
        <fieldset>
          <legend>Seus Dados</legend>
          <Input 
                name="pNome" 
                label="Nome Completo" 
                type="text"
                value={pNome} 
                onChange={(e)=> setPNome(e.target.value)} 
          />

          <Input 
                name="email" 
                label="Email"
                type="email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)} 
          />

          <Input 
                name="passaword" 
                label="Password"
                type="password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)} 
          />
      
        </fieldset>

        <footer>
          <p>
           
            Inportante! <br />
            Preencha Todos os Dados
          </p>
          <button type="submit" >Salvar Cadastro</button>
        </footer>
        </form>
      </main>
    </div>
  );
}

export default CadastroForm;