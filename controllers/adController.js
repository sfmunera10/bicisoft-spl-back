var model = require('../database/models/index');
var adController = {};

adController.findAll = function(req, res){
	model.Ad.findAll({})
        .then(ads => res.json({
            error: false,
            data: ads
        }))
        .catch(error => res.json({
            error: true,
            data: [],
            error: error
        }));
};
adController.findOne = function(req, res){
    const ad_id = req.params.id;
    model.Ad.findOne({
            where: {
                id: ad_id
            }
        })
        .then(ad => res.json({
            error: false,
            data: ad
        }))
        .catch(error => res.json({
            error: true,
            error: error
        }));
};
adController.findOneByName = function(req, res){
    const ad_name = req.params.name;
    model.Ad.findOne({
            where: {
                name: ad_name
            }
        })
        .then(ad => res.json({
            error: false,
            data: ad
        }))
        .catch(error => res.json({
            error: true,
            error: error
        }));
};
adController.create = function(req, res){
	const {bikewayContent,name,link,userId} = req.body;
    model.Ad.create({
            bikewayContent: bikewayContent,
            name: name,
            link: link,
            userId:userId
        })
        .then(ad => res.status(201).json({
            error: false,
            data: ad,
            message: 'New ad has been created.'
        }))
        .catch(error => res.json({
            error: true,
            data: [],
            error: error
        }));
};
adController.update = function(req, res){
	const ad_id = req.params.id;
    const {bikewayContent,name,link,userId} = req.body;
    model.Ad.update({
            bikewayContent: bikewayContent,
            name: name,
            link: link,
            userId:userId
        }, {
            where: {
                id: ad_id
            }
        })
        .then(ad => res.json({
            error: false,
            message: 'ad has been updated.'
        }))
        .catch(error => res.json({
            error: true,
            error: error
        }));
};
adController.destroy = function(req, res){
	const ad_id = req.params.id;
    model.Ad.destroy({ where: {
        id: ad_id
    }})
        .then(status => res.json({
            error: false,
            message: 'ad has been deleted.'
        }))
        .catch(error => res.json({
            error: true,
            error: error
        }));
};

module.exports = adController;