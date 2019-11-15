const fs = require('fs')

process.argv.forEach(function (val, index, array) {
    var arg = val.split("=");
    if (arg.length > 0) {
        if (arg[0] === 'env') {
            const file = arg[1] + '.json';
            try {
                if (fs.existsSync('./environments/' + file)) {
                    var env = require('./' + file);
                    console.info('The loaded property file was ' + file);
                    module.exports = env;
                }else{
                    var env = require('./TuAficionado.json');
                    console.warn('The loaded property file was TuAficionado.json');
                    module.exports = env;
                }
            } catch(err) {
                console.error(err)

            }
        }
    }
});