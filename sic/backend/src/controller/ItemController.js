const { response } = require('express');
const ItemModel = require('../model/ItemModel');

class ItemController{

    async create (req, res){
        const item = new ItemModel(req.body);
        await item
            .save()
            .then(response =>{
                return res.status(200).json(response);
            })
            .catch(error =>{
                return res.status(500).json(error);
            }); 
    }

    async update(req, res){
        await ItemModel.findByIdAndUpdate({'_id': req.params.id}, req.body, {new: true})
        .then(response =>{
            return res.status(200).json(response);
        })
        .catch(error =>{
            return res.status(500).json(error);
        });
    }

    async all(req, res){
        await ItemModel.find({},req.body)
            .sort('tipo')
            .then(response => {
                return res.status(200).json(response);
            })
            .catch(error =>{
                return res.status(500).json(error);
            });
    }

    async show(req, res){
        await ItemModel.findById(req.params.id)
        .then(response =>{
            if(response)
                return res.status(200).json(response);
            else
                return res.status(404).json({error: 'O item não foi encontrado'});
        })
        .catch(error =>{
            return res.status(500).json(error);
        });
    }

    async delete(req, res){
        await ItemModel.deleteOne({'_id': req.params.id}, req.body)
        .then(response =>{
            return res.status(200).json(response);
        })
        .catch(error =>{
            return res.status(500).json(error);
        });
    }

    async done(req, res){
        await ItemModel.findByIdAndUpdate(
            {'_id': req.params.id},
            {'comprado': req.params.comprado},
            {new:true})
            .then(response =>{
                return res.status(200).json(response);
            })
            .catch(error =>{
                return res.status(500).json(error);
            })
    }

    async type(req, res){
        await ItemModel
        .find({
            'tipo': {'$in': req.body.tipo}
        })
        .then(response =>{
            return res.status(200).json(response);
        })
        .catch(error =>{
            return res.status(500).json(error);
        });
    }

}

module.exports = new ItemController();