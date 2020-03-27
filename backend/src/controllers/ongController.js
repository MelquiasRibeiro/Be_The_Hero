const conection = require('../database/conect')
const crypto= require('crypto')

module.exports={


    async create(request, response){
        const {name, email, whatsapp, city, uf}= request.body;
        
        const id = crypto.randomBytes(4).toString('Hex');

        await conection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        });

    return response.json({
        id
    });
    },


    async show(request, response){
        const ongs = await conection('ongs').select('*');


    return response.json(
        ongs
    )
    }

}