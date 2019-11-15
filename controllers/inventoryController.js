var model = require('../database/models/index');
const prop = require('../environments/environments');
var inventoryController = {};

inventoryController.findAll = function(req, res){
	model.Inventory.findAll({})
        .then(inventories => res.json({
            error: false,
            data: inventories
        }))
        .catch(error => res.json({
            error: true,
            data: [],
            error: error
        }));
};

inventoryController.findQr = function(req, res){
    const qr_code = req.params.qr;
    if (prop.environment == "BiciTrip") {
        model.Inventory.findAll({
            where: {
                QR: qr_code
            }
        })
        .then(inventory => res.json({
            error: false,
            data: inventory
        }))
        .catch(error => res.json({
            error: true,
            error: error
        }));
    } else {
        res.status(501).send('Not Implemented');
    }
    
};

inventoryController.findOne = function(req, res){
    const inventory_id = req.params.id;
    model.Inventory.findOne({
            where: {
                id: inventory_id
            }
        })
        .then(inventory => res.json({
            error: false,
            data: inventory
        }))
        .catch(error => res.json({
            error: true,
            error: error
        }));
};
inventoryController.create = function(req, res){
	const {modelName,description,QR,userId} = req.body;
    model.Inventory.create({
            modelName: modelName,
            description: description,
            QR: QR,
            userId:userId
        })
        .then(inventory => res.status(201).json({
            error: false,
            data: inventory,
            message: 'New inventory has been created.'
        }))
        .catch(error => res.json({
            error: true,
            data: [],
            error: error
        }));
};
inventoryController.update = function(req, res){
	const inventory_id = req.params.id;
    const {modelName,description,QR,userId} = req.body;
    model.Inventory.update({
            modelName: modelName,
            description: description,
            QR: QR,
            userId:userId
        }, {
            where: {
                id: inventory_id
            }
        })
        .then(inventory => res.json({
            error: false,
            message: 'inventory has been updated.'
        }))
        .catch(error => res.json({
            error: true,
            error: error
        }));
};
inventoryController.destroy = function(req, res){
	const inventory_id = req.params.id;
    model.Inventory.destroy({ where: {
        id: inventory_id
    }})
        .then(status => res.json({
            error: false,
            message: 'inventory has been deleted.'
        }))
        .catch(error => res.json({
            error: true,
            error: error
        }));
};

module.exports = inventoryController;