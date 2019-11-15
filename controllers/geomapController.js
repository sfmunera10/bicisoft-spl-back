var model = require('../database/models/index');
var geomapController = {};

geomapController.findAll = function(req, res){
	model.GeoMap.findAll({})
        .then(geomaps => res.json({
            error: false,
            data: geomaps
        }))
        .catch(error => res.json({
            error: true,
            data: [],
            error: error
        }));
};
geomapController.findOne = function(req, res){
    const geomap_id = req.params.id;
    model.GeoMap.findOne({
            where: {
                id: geomap_id
            }
        })
        .then(geomap => res.json({
            error: false,
            data: geomap
        }))
        .catch(error => res.json({
            error: true,
            error: error
        }));
};
geomapController.findOneByName = function(req, res){
    const geomap_name = req.params.name;
    model.GeoMap.findOne({
            where: {
                name: geomap_name
            }
        })
        .then(geomap => res.json({
            error: false,
            data: geomap
        }))
        .catch(error => res.json({
            error: true,
            error: error
        }));
};
geomapController.create = function(req, res){
	const {cityName,type,travelId,locationId} = req.body;
    model.GeoMap.create({
            cityName: cityName,
            type: type,
            travelId:travelId,
            locationId:locationId
        })
        .then(geomap => res.status(201).json({
            error: false,
            data: geomap,
            message: 'New geomap has been created.'
        }))
        .catch(error => res.json({
            error: true,
            data: [],
            error: error
        }));
};
geomapController.update = function(req, res){
	const geomap_id = req.params.id;
    const {cityName,type,travelId,locationId} = req.body;
    model.GeoMap.update({
            cityName: cityName,
            type: type,
            travelId:travelId,
            locationId:locationId
        }, {
            where: {
                id: geomap_id
            }
        })
        .then(geomap => res.json({
            error: false,
            message: 'geomap has been updated.'
        }))
        .catch(error => res.json({
            error: true,
            error: error
        }));
};
geomapController.destroy = function(req, res){
	const geomap_id = req.params.id;
    model.GeoMap.destroy({ where: {
        id: geomap_id
    }})
        .then(status => res.json({
            error: false,
            message: 'geomap has been deleted.'
        }))
        .catch(error => res.json({
            error: true,
            error: error
        }));
};

module.exports = geomapController;