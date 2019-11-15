var model = require('../database/models/index');
const prop = require('../environments/environments');

var userController = {};

userController.findAll = function(req, res){
	model.User.findAll({})
        .then(users => res.json({
            error: false,
            data: users
        }))
        .catch(error => res.json({
            error: true,
            data: [],
            error: error
        }));
};
userController.findBestTravelTimesFromUsers = function(req, res){
    if (prop.environment == "TuAficionado") {
        model.User.findAll({
            attributes: ['name', 'lastName', 'company'],
            include: [{
                model: model.Travel,
                attributes: ['startDate', 'finishDate', 'duration']
            }]
            })
            .then(users => res.json({
                error: false,
                data: users
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
userController.findInventoriesFromUsersByUserName = function(req, res){
    const user_name = req.params.name;
    model.User.findAll({
        attributes: ['name', 'lastName', 'company'],
        include: [{
            model: model.Inventory,
            attributes: ['model', 'description']
        }],
        where: {
            name: user_name
        }
        })
        .then(users => res.json({
            error: false,
            data: users
        }))
        .catch(error => res.json({
            error: true,
            data: [],
            error: error
        }));
};
userController.findInventoriesFromUsersByUserCompany = function(req, res){
    if (prop.environment == "CiudadBici") {
        const user_company = req.params.company;
        model.User.findAll({
            attributes: ['name', 'lastName', 'company'],
            include: [{
                model: model.Inventory,
                attributes: ['model', 'description']
        }],
        where: {
            company: user_company
        }
        })
        .then(users => res.json({
            error: false,
            data: users
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
userController.findOne = function(req, res){
    const user_id = req.params.id;
    model.User.findOne({
            where: {
                id: user_id
            }
        })
        .then(user => res.json({
            error: false,
            data: user
        }))
        .catch(error => res.json({
            error: true,
            error: error
        }));
};
userController.findOneByName = function(req, res){
    const user_name = req.params.name;
    model.User.findOne({
            where: {
                name: user_name
            }
        })
        .then(user => res.json({
            error: false,
            data: user
        }))
        .catch(error => res.json({
            error: true,
            error: error
        }));
};
userController.create = function(req, res){
	const {name,lastName,citizenId,citizenIdType,age,cellphoneNumber,role,company} = req.body;
    model.User.create({
            name: name,
            lastName: lastName,
            citizenId: citizenId,
            citizenIdType: citizenIdType,
            age: age,
            cellphoneNumber: cellphoneNumber,
            role: role,
            company: company
        })
        .then(user => res.status(201).json({
            error: false,
            data: user,
            message: 'New user has been created.'
        }))
        .catch(error => res.json({
            error: true,
            data: [],
            error: error
        }));
};
userController.update = function(req, res){
	const user_id = req.params.id;
    const {name,lastName,citizenId,citizenIdType,age,cellphoneNumber,role,company} = req.body;
    model.User.update({
            name: name,
            lastName: lastName,
            citizenId: citizenId,
            citizenIdType: citizenIdType,
            age: age,
            cellphoneNumber: cellphoneNumber,
            role: role,
            company: company
        }, {
            where: {
                id: user_id
            }
        })
        .then(user => res.json({
            error: false,
            message: 'user has been updated.'
        }))
        .catch(error => res.json({
            error: true,
            error: error
        }));
};
userController.destroy = function(req, res){
	const user_id = req.params.id;
    model.User.destroy({ where: {
        id: user_id
    }})
        .then(status => res.json({
            error: false,
            message: 'user has been deleted.'
        }))
        .catch(error => res.json({
            error: true,
            error: error
        }));
};

module.exports = userController;