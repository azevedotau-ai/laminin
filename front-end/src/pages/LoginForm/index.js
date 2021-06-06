import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import Input from "../../components/Input/";
import "./style.css";

import api from "../../services";

function LoginForm() {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

 
  const history = useHistory();


  function login(e) {
    e.preventDefault();  
    api.post('login',{
      email: email,
      password: password,    
    }).then(()=>{
      history.push('/dashboard');
    }).catch((e)=>{
      alert('Erro Por Favor Verfique os teus Dados');
    })
  }

 


  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        titulo="Login"
        description="Faça o login para poder desfrutar dos preços"
      />

      <main>
        <form onSubmit={login}>
        <fieldset>
          <legend>Dados de Entrada</legend>
          <Input 
                name="pNome" 
                label="Email" 
                type="email"
                value={email} 
                onChange={(e)=> setEmail(e.target.value)} 
          />

          <Input 
                name="email" 
                type="password"
                label="Password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)} 
          />
      
        </fieldset>

        <footer>
          <p>
           
            Inportante! <br />
            Preencha Todos os Dados
          </p>
          <button type="submit" >Entrar</button>
        </footer>
        </form>
      </main>
    </div>
  );
}

export default LoginForm;