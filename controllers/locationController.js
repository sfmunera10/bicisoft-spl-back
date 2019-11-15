var model = require('../database/models/index');
var locationController = {};

locationController.findAll = function(req, res){
	model.Location.findAll({})
        .then(locations => res.json({
            error: false,
            data: locations
        }))
        .catch(error => res.json({
            error: true,
            data: [],
            error: error
        }));
};
locationController.findOne = function(req, res){
    const location_id = req.params.id;
    model.Location.findOne({
            where: {
                id: location_id
            }
        })
        .then(location => res.json({
            error: false,
            data: location
        }))
        .catch(error => res.json({
            error: true,
            error: error
        }));
};
locationController.findOneByAddress = function(req, res){
    const location_address = req.params.address;
    model.Location.findOne({
            where: {
                address: location_address
            }
        })
        .then(location => res.json({
            error: false,
            data: location
        }))
        .catch(error => res.json({
            error: true,
            error: error
        }));
};
locationController.create = function(req, res){
	const {lat,lon,address,geomapId,shopId} = req.body;
    model.Location.create({
            lat: lat,
            lon: lon,
            address: address,
            geomapId:geomapId,
            shopId:shopId
        })
        .then(location => res.status(201).json({
            error: false,
            data: location,
            message: 'New location has been created.'
        }))
        .catch(error => res.json({
            error: true,
            data: [],
            error: error
        }));
};
locationController.update = function(req, res){
	const location_id = req.params.id;
    const {lat,lon,address,geomapId,shopId} = req.body;
    model.Location.update({
            lat: lat,
            lon: lon,
            address: address,
            geomapId:geomapId,
            shopId:shopId
        }, {
            where: {
                id: location_id
            }
        })
        .then(location => res.json({
            error: false,
            message: 'location has been updated.'
        }))
        .catch(error => res.json({
            error: true,
            error: error
        }));
};
locationController.destroy = function(req, res){
	const location_id = req.params.id;
    model.Location.destroy({ where: {
        id: location_id
    }})
        .then(status => res.json({
            error: false,
            message: 'location has been deleted.'
        }))
        .catch(error => res.json({
            error: true,
            error: error
        }));
};

module.exports = locationController;