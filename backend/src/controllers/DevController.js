// Externos
const axios = require('axios');

// Internos

const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');
/*
    Controller tem no max 5 metodos: 
    index(exibição de lista), 
    store(armazenamonto),
    show(exibiçao de dados especifico),
    update(alterar um dado),
    destroy(deletar um dado)
*/

module.exports = {

    async index(request,response){
        const devs = await Dev.find();

        return response.json(devs);
    },

    async store (request,response){
        const { github_username, techs, latitude, longitude} = request.body;

        let dev = await Dev.findOne({github_username});

        if(!dev){

            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);
        
            const { name = login , avatar_url, bio } = apiResponse.data;
        
            const techsArray = parseStringAsArray(techs);
        
            const location = {
                type: 'Point',
                coordinates: [longitude,latitude],
            };
        
            dev = await Dev.create({
                name,
                github_username,
                bio,
                avatar_url,
                techs : techsArray,
                location,
            })
    }
        
        return response.json(dev);
    },
    async update(request, response){ 
        //tualizar o nome,Avatar,Bio, Localização e Techs
        return response.json({message: "Alterado"})
    },
    async destroy(request, response){
        return response.json({ message: "Exluido"})
    },
}