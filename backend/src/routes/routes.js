var express = require('express');
var routes = express.Router();
const {check} = require('express-validator');
const ConsultorController = require("../controllers/ConsultorController/index");
const MercadoController = require("../controllers/MercadoController/index");
const HistoricoController = require("../controllers/HistoricoController/index");


//Rotas Para Usuarios

routes.get("/consultor",ConsultorController.index);

routes.post("/register",
      [check('nome','Nome Obrigatorio').not().isEmpty(),
       check('email', 'Email Obrigatório').isEmail(),
       check('password','Password Obrigatório').not().isEmpty()
      ],
      ConsultorController.create
);

routes.post("/login",
      [
       check('email', 'Email Obrigatório').isEmail(),
       check('password','Password Obrigatório').not().isEmpty()
      ],
      ConsultorController.login
);


//Rotas Para Mercado
routes.get("/mercado", MercadoController.index);

routes.post("/mercado", [check("nome","Nome Obrigatorio").not().isEmpty()], MercadoController.create);

//Rotas Para Histórico
routes.get("/historico", HistoricoController.index);

routes.post("/historico",  
    [check('nomeProduto','Insira o Produto').not().isEmpty(),
     check('precoProduto', 'Insira o Preco').not().isEmpty(),
     check('mercadoId','Insira o Mercado').not().isEmpty(),
     check('descricao', 'Insira a Descrição').not().isEmpty()
], HistoricoController.create);

routes.get("/produto",HistoricoController.show);
routes.get("/mercadoS",HistoricoController.showByMercado);
routes.delete('/historico/destroy', HistoricoController.destroy);
module.exports = routes;