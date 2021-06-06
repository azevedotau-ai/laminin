import React, { useState, useEffect } from 'react';
import './style.css';
import PageHeader from '../../components/PageHeader';
import PrecoItem from '../../components/PrecoItem';
import Input from '../../components/Input/';
import api from '../../services';

function DashBoard() {

    const [mercado,setMercado] = useState("");
    const [produto,setProduto] = useState("");
    const [result, setResult] = useState([]);

    async function pesquisar(e) {
        e.preventDefault();
        
            if(mercado === ""){
                
                const response = await api.get('produto',{
                    params:{
                        nome_produto: produto
                    }
                });
                setResult(response.data);
            }else{
                const response = await api.get('mercadoS',{
                    params:{
                        mercado: mercado
                    }
                });
                setResult(response.data);
            }
            alert("Por Favor Escolha Um Opção Para Pesquisa")
        
    }

    useEffect(()=>{
        async function fetchData() {
            const response = await api.get('historico');
            setResult(response.data);
        }
        fetchData();
        
    },[0]);

    return(
        <div id="page-teacher-list" className="container">
            <PageHeader titulo="Estes são os preços disponíveis.">
                <form id="search-teacher" onSubmit={pesquisar}>
                    
                    <Input 
                            type="text" 
                            label="Pesquisar Por Mercado"
                            value={mercado}
                            onChange={(e)=>setMercado(e.target.value)}
                    />
                      <Input 
                            type="text" 
                            label="Pesquisar Por Produto"
                            value={produto}
                            onChange={(e)=>setProduto(e.target.value)}
                    />
                    <button type="submit" >Pesquisar</button>
                </form>
            </PageHeader>

            <main>
              
              {result.map((el,index)=>{
                  return  <PrecoItem key={index} dados={el}/>
              })}
            
            </main>
        </div>
    )
};

export default DashBoard;