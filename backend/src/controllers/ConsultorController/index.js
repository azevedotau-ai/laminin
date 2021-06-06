const { validationResult } = require("express-validator");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const auth = require('../Auth/index');
const Consultor = require("../../models/Consultor/Consultor");
const config = require("../../../config/resource");




module.exports = {
    async index(req, res) {
      try {
        const consultores = await Consultor.find({});
        if(!consultores) res.status(500).json({ msg: consultores});
        res.send(consultores);
        
      } catch (error) {
        res.status(400).json({ msg: e.message });
      }
    },

    async show() {},
  
    async create(req, res) {
        const {nome,  email, password } = req.body;

        const errors = validationResult(req);

        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
    
        const consultorList = await Consultor.findOne({email});

        if(consultorList){
          return res.sendStatus(500).send("Usuário Já Existe");
        }

       const consultor = new Consultor({nome:nome, email: email, password: password});
    
       bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(consultor.password, salt, async (err, hash) => {
            // Hash Password
            consultor.password = hash;
            // Salvar Consultor
            try {
              const novoConsultor = await consultor.save();
              res.send(201);
            } catch (err) {
              return res.sendStatus(500).send("Erro No Servidor");
            }
          });
        });
    },

    async login(req, res){
      const{email, password} = req.body;
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.sendStatus(400).json({ errors: errors.array() });
      }


      try {
        // Checar usuario
        const consultor = await Consultor.findOne({ email });
        if (!consultor) throw Error('Consultor Invalido');

        const isMatch = await bcrypt.compare(password, consultor.password);
        if (!isMatch) throw Error('Dados Invalidos');

        const token = jwt.sign({ id: consultor._id }, config.JWT_SECRET, { expiresIn: 3600 });
        if (!token) throw Error('Token Invalido');

        res.status(200).json({
          token,
          consultor: {
            id: consultor._id,
            nome: consultor.nome,
            email: consultor.email
          }
        });
      } catch (e) {
        res.status(400).json({ msg: e.message });
      }

    },

    async destroy(){
      
    }
};