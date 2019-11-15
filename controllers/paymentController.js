var model = require('../database/models/index');
const prop = require('../environments/environments');
var paymentController = {};

paymentController.findAll = function(req, res){
	model.Payment.findAll({})
        .then(payments => res.json({
            error: false,
            data: payments
        }))
        .catch(error => res.json({
            error: true,
            data: [],
            error: error
        }));
};
paymentController.findOne = function(req, res){
    const payment_id = req.params.id;
    if (prop.environment == "BiciTrip") {
        model.Payment.findOne({
                where: {
                    id: payment_id
                }
            })
            .then(payment => res.json({
                error: false,
                data: payment
            }))
            .catch(error => res.json({
                error: true,
                error: error
            }));
    } else {
        res.status(501).send('Not Implemented');
    }
};
paymentController.create = function(req, res){
    const {travelTime,amount,userId} = req.body;
    
    if (prop.environment == "BiciTrip") {
        model.Payment.create({
            travelTime: travelTime,
            amount: amount,
            userId:userId
        })
        .then(payment => res.status(201).json({
            error: false,
            data: payment,
            message: 'New payment has been created.'
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
paymentController.update = function(req, res){
	const payment_id = req.params.id;
    const {travelTime,amount,userId} = req.body;
    if (prop.environment == "BiciTrip") {
        model.Payment.update({
                travelTime: travelTime,
                amount: amount,
                userId:userId
            }, {
                where: {
                    id: payment_id
                }
            })
            .then(payment => res.json({
                error: false,
                message: 'payment has been updated.'
            }))
            .catch(error => res.json({
                error: true,
                error: error
            }));
    } else {
        res.status(501).send('Not Implemented');
    }
};
paymentController.destroy = function(req, res){
	const payment_id = req.params.id;
    if (prop.environment == "BiciTrip") {
        model.Payment.destroy({ where: {
            id: payment_id
        }})
            .then(status => res.json({
                error: false,
                message: 'payment has been deleted.'
            }))
            .catch(error => res.json({
                error: true,
                error: error
            }));
    } else {
        res.status(501).send('Not Implemented');
    }
};

module.exports = paymentController;