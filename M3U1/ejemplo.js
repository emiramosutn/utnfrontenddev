var moment = require('moment');
moment.locale('es');
console.log('Naci ' + moment('13/06/1980', 'DD/MM/YYYY').fromNow());