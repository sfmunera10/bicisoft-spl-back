var model = require('../database/models/index');
var reviewController = {};

reviewController.findAll = function(req, res){
	model.Review.findAll({})
        .then(reviews => res.json({
            error: false,
            data: reviews
        }))
        .catch(error => res.json({
            error: true,
            data: [],
            error: error
        }));
};
reviewController.findOne = function(req, res){
    const review_id = req.params.id;
    model.Review.findOne({
            where: {
                id: review_id
            }
        })
        .then(review => res.json({
            error: false,
            data: review
        }))
        .catch(error => res.json({
            error: true,
            error: error
        }));
};
reviewController.create = function(req, res){
	const {comment,score,shopId,userId} = req.body;
    model.Review.create({
            comment: comment,
            score: score,
            shopId:shopId,
            userId:userId
        })
        .then(review => res.status(201).json({
            error: false,
            data: review,
            message: 'New review has been created.'
        }))
        .catch(error => res.json({
            error: true,
            data: [],
            error: error
        }));
};
reviewController.update = function(req, res){
	const review_id = req.params.id;
    const {comment,score,shopId,userId} = req.body;
    model.Review.update({
            comment: comment,
            score: score,
            shopId:shopId,
            userId:userId
        }, {
            where: {
                id: review_id
            }
        })
        .then(review => res.json({
            error: false,
            message: 'review has been updated.'
        }))
        .catch(error => res.json({
            error: true,
            error: error
        }));
};
reviewController.destroy = function(req, res){
	const review_id = req.params.id;
    model.Review.destroy({ where: {
        id: review_id
    }})
        .then(status => res.json({
            error: false,
            message: 'review has been deleted.'
        }))
        .catch(error => res.json({
            error: true,
            error: error
        }));
};

module.exports = reviewController;