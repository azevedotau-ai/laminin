import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import CadastroForm from '../pages/CadastroForm';
import LoginForm from '../pages/LoginForm';
import Landing from '../pages/Landing';
import DashBoard from '../pages/DashBoard';


function Routes() {
    return(
        <BrowserRouter>
            <Route path="/" exact component={Landing}/>
            <Route path="/login"  component={LoginForm}/>
            <Route path="/cadastro" component={CadastroForm}/>
            <Route path="/dashboard" component={DashBoard}/>
        </BrowserRouter>
    )
}

export default Routes;