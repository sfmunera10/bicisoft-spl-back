var model = require('../database/models/index');
var bikewayController = {};

bikewayController.findAll = function(req, res){
	model.Bikeway.findAll({})
        .then(bikeways => res.json({
            error: false,
            data: bikeways
        }))
        .catch(error => res.json({
            error: true,
            data: [],
            error: error
        }));
};
bikewayController.findOne = function(req, res){
    const bikeway_id = req.params.id;
    model.Bikeway.findOne({
            where: {
                id: bikeway_id
            }
        })
        .then(bikeway => res.json({
            error: false,
            data: bikeway
        }))
        .catch(error => res.json({
            error: true,
            error: error
        }));
};
bikewayController.findOneByName = function(req, res){
    const bikeway_name = req.params.name;
    model.Bikeway.findOne({
            where: {
                name: bikeway_name
            }
        })
        .then(bikeway => res.json({
            error: false,
            data: bikeway
        }))
        .catch(error => res.json({
            error: true,
            error: error
        }));
};
bikewayController.create = function(req, res){
	const {name,estimatedTime,isActive} = req.body;
    model.Bikeway.create({
            name: name,
            estimatedTime: estimatedTime,
            isActive: isActive
        })
        .then(bikeway => res.status(201).json({
            error: false,
            data: bikeway,
            message: 'New bikeway has been created.'
        }))
        .catch(error => res.json({
            error: true,
            data: [],
            error: error
        }));
};
bikewayController.update = function(req, res){
	const bikeway_id = req.params.id;
    const {name,estimatedTime,isActive} = req.body;
    model.Bikeway.update({
            name: name,
            estimatedTime: estimatedTime,
            isActive: isActive
        }, {
            where: {
                id: bikeway_id
            }
        })
        .then(bikeway => res.json({
            error: false,
            message: 'bikeway has been updated.'
        }))
        .catch(error => res.json({
            error: true,
            error: error
        }));
};
bikewayController.destroy = function(req, res){
	const bikeway_id = req.params.id;
    model.Bikeway.destroy({ where: {
        id: bikeway_id
    }})
        .then(status => res.json({
            error: false,
            message: 'bikeway has been deleted.'
        }))
        .catch(error => res.json({
            error: true,
            error: error
        }));
};

module.exports = bikewayController;