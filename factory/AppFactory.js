const BiciTrip = require('../business/BiciTrip');
const CiudadBici = require('../business/CiudadBici');
const TuAficionado = require('../business/TuAficionado');


const appFactory = function(type){
    if(type === 'BiciTrip'){
        return new BiciTrip()
    } else if(type === 'CiudadBici') {
        return new CiudadBici()
    } else if(type === 'TuAficionado'){
        return new TuAficionado()
    }
};

module.exports = appFactory;