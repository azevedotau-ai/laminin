const { validationResult } = require("express-validator");
const Mercado = require("../../models/Mercado/Mercado");


module.exports = {
    async index(req, res){
        try {
            const mercados = await Mercado.find({});
            if(!mercados) res.status(500).json({ msg: mercados});
            res.send(mercados);
            
          } catch (error) {
            res.status(400).json({ msg: e.message });
          }
    },
    
    async show(req, res){

    },

    async create(req, res){
        const {nome} = req.body;

        const errors = validationResult(req);

        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
        
        const mercado = new Mercado({nome});

        try {
            await mercado.save();
            res.status(200).json({mercado});
        } catch (error) {
            res.status(400).json({ msg: error.message });
        }
    }
}