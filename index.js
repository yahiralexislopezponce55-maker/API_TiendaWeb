'use strict'

require('dotenv').config();
const App = require('./app/app');

const PORT = process.env.APP_PORT || process.env.PORT || 3300;

App.listen(parseInt(PORT), function(error){
    if(error) return console.error(error);
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
