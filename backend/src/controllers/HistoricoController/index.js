const { validationResult } = require("express-validator");
const Historico = require("../../models/Historico/Historico");
const Mercado = require("../../models/Mercado/Mercado");


module.exports = {
    async index(req, res){
        try {
            const historicos = await Historico.find({});

            if(!historicos){
                 res.status(500).json({ msg: historicos});
            }
            res.send(historicos);
            
          } catch (error) {
            res.status(400).json({ msg: e.message });
          }
    },
    
    async show(req, res){
        
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
        try {

            const {nome_produto} = req.query;
           
            
            const historico = await Historico.find({nome_produto});
            if(!historico){
                res.status(500).json({ msg: "Sem Historico"});
            }
            res.status(201).json(historico);
        } catch (error) {
            res.status(400).json({ msg: error.message });
        }

    },

    async showByMercado(req, res){
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            const {mercado} = req.query;
          
            const mercadoR = await Mercado.findOne({nome: mercado});

            if(!mercadoR){
                res.status(500).json({ msg: "Sem Historico"});
            }

            const _id = mercadoR.id;
            
            if(_id){
                const historico = await Historico.find({mercado: _id});
                res.status(201).json(historico);
            }
            
            res.status(500).json({ msg: "Sem Historico"});
            
        } catch (error) {
            res.status(400).json({ msg: error.message });
        }
    },

    async create(req, res){
        const {nomeProduto, precoProduto, mercadoId, descricao} = req.body;
        const _id = mercadoId;

        const errors = validationResult(req);

        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
        
        const mercado = await Mercado.findById({_id});

        if(!mercado){
            res.status(500).json({ msg: "Sem Mercado"});
        }

        const historico = new Historico({nome_produto: nomeProduto, preco_produto: precoProduto, mercado: mercadoId, descricao: descricao});

        try {
            await historico.save();
            res.status(200).json({historico});
        } catch (error) {
            res.status(400).json({ msg: error.message });
        }
    },
    async destroy(){
        try {
            const historicos = await Historico.find({});

            if(historicos){
                const historico = await Historico.deleteMany();
                 res.status(204).json({ msg: "Historicos Removidos"});
            }

            res.status(500).json({ msg: "Sem Historicos Para Remover"});
        } catch (error) {
            res.status(400).json({ msg: error.message });
        }

    }
}