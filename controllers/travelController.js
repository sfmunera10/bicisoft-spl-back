var model = require('../database/models/index');
var travelController = {};

travelController.findAll = function(req, res){
	model.Travel.findAll({})
        .then(travels => res.json({
            error: false,
            data: travels
        }))
        .catch(error => res.json({
            error: true,
            data: [],
            error: error
        }));
};
travelController.findAllLT = function(req, res){
	model.LocationTravels.findAll({
        include:[{all:true}]
        })
        .then(travels => res.json({
            error: false,
            data: travels
        }))
        .catch(error => res.json({
            error: true,
            data: [],
            error: error
        }));
};
travelController.findOne = function(req, res){
    const travel_id = req.params.id;
    model.Travel.findOne({
            where: {
                id: travel_id
            },
            include: [{
            model: model.Location,
            as: 'locations',
            }]
        })
        .then(travel => res.json({
            error: false,
            data: travel
        }))
        .catch(error => res.json({
            error: true,
            error: error
        }));
};
travelController.create = function(req, res){
    const {startDate,bikewayId,geomapId,userId, locationID} = req.body;
    model.Travel.create({
            startDate: startDate,
            bikewayId:bikewayId,
            geomapId:geomapId,
            userId:userId
        })
        .then(travel => {
            model.LocationTravels.create({
                travelId: travel.id,
                locationId: locationID
            })
            res.status(201).json({
            error: false,
            data: travel,
            message: 'New travel has been created.'})
        })
        .catch(error => res.json({
            error: true,
            data: [],
            error: error
        }));
};
travelController.update = function(req, res){
	const travel_id = req.params.id;
    const {startDate,finishDate,bikewayId,geomapId,userId} = req.body;
    const sD = new Date(startDate);   
    const fD = new Date(finishDate);  
    model.Travel.update({
            finishDate: finishDate,
            duration: fD.getTime() - sD.getTime(),
            bikewayId:bikewayId,
            geomapId:geomapId,
            userId:userId
        }, {
            where: {
                id: travel_id
            }
        })
        .then(travel => res.json({
            error: false,
            message: 'travel has been finished'
        }))
        .catch(error => res.json({
            error: true,
            error: error
        }));
};
travelController.destroy = function(req, res){
	const travel_id = req.params.id;
    model.Travel.destroy({ where: {
        id: travel_id
    }})
        .then(status => res.json({
            error: false,
            message: 'travel has been deleted.'
        }))
        .catch(error => res.json({
            error: true,
            error: error
        }));
};

module.exports = travelController;