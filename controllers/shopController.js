var model = require('../database/models/index');
const prop = require('../environments/environments');


var shopController = {};

shopController.findAll = function(req, res){
	model.Shop.findAll({})
        .then(shops => res.json({
            error: false,
            data: shops
        }))
        .catch(error => res.json({
            error: true,
            data: [],
            error: error
        }));
};

shopController.findAllRepair = function(req, res){
    if (prop.environment == "CiudadBici") {
        model.Shop.findAll({where: {type: "Reparacion" }})
        .then(shops => res.json({
            error: false,
            data: shops
        }))
        .catch(error => res.json({
            error: true,
            data: [],
            error: error
        }));
    } else {
        res.status(501).send('Not Implemented');
    }
	
};

shopController.findAllRent = function(req, res){
    if (prop.environment == "BiciTrip") {
        model.Shop.findAll({where: {type: "Alquiler" }})
        .then(shops => res.json({
            error: false,
            data: shops
        }))
        .catch(error => res.json({
            error: true,
            data: [],
            error: error
        }));
    } else {
        res.status(501).send('Not Implemented');
    }	
};

shopController.findOne = function(req, res){
    const shop_id = req.params.id;
    model.Shop.findOne({
            where: {
                id: shop_id
            }
        })
        .then(shop => res.json({
            error: false,
            data: shop
        }))
        .catch(error => res.json({
            error: true,
            error: error
        }));
};
shopController.findOneByName = function(req, res){
    const shop_name = req.params.name;
    model.Shop.findOne({
            where: {
                name: shop_name
            }
        })
        .then(shop => res.json({
            error: false,
            data: shop
        }))
        .catch(error => res.json({
            error: true,
            error: error
        }));
};
shopController.create = function(req, res){
	const {name,type,phoneNumber,geomapId,locationId} = req.body;
    model.Shop.create({
            name: name,
            type: type,
            phoneNumber: phoneNumber,
            geomapId:geomapId,
            locationId:locationId
        })
        .then(shop => res.status(201).json({
            error: false,
            data: shop,
            message: 'New shop has been created.'
        }))
        .catch(error => res.json({
            error: true,
            data: [],
            error: error
        }));
};
shopController.update = function(req, res){
	const shop_id = req.params.id;
    const {name,type,phoneNumber,geomapId,locationId} = req.body;
    model.Shop.update({
            name: name,
            type: type,
            phoneNumber: phoneNumber,
            geomapId:geomapId,
            locationId:locationId
        }, {
            where: {
                id: shop_id
            }
        })
        .then(shop => res.json({
            error: false,
            message: 'shop has been updated.'
        }))
        .catch(error => res.json({
            error: true,
            error: error
        }));
};
shopController.destroy = function(req, res){
	const shop_id = req.params.id;
    model.Shop.destroy({ where: {
        id: shop_id
    }})
        .then(status => res.json({
            error: false,
            message: 'shop has been deleted.'
        }))
        .catch(error => res.json({
            error: true,
            error: error
        }));
};

module.exports = shopController;