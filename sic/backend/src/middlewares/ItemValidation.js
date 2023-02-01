const ItemModel = require ('../model/ItemModel');

const ItemValidation = async (req, res, next) => {

    const {nomeItem, tipo, descricao} = req.body;

    if(!nomeItem)
    return res.status(400).json({error: 'O nome do item é um campo obrigatório!'});
    else if(!tipo)
    return res.status(400).json({error: 'O tipo do item é obrigatório!'});
    else if(!descricao)
    return res.status(400).json({error: 'A descrição é obrigatória!'});
    else{
        next();
    }
 
}

module.exports = ItemValidation;