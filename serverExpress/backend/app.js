const path = require('path');
const createError = require('http-errors');
const express  = require('express');

const index = require('./routes/index');
const users = require('./routes/users');

const app = express();
const PORT = process.env.PORT || 3000;


console.log(__dirname);
// se establece la ruta para recursos estáticos de la aplicación
app.use(express.static(path.join(__dirname,'../frontend/public')));
app.use(express.urlencoded({extended: false}));

// view engine setup
app.set('views', path.join(__dirname, '../frontend/views'));
app.set('view engine', 'ejs');

//se establecen las rutas del proyecto
app.use('/', index);
app.use('/users', users);  // Jala la ruta de users

// Se ejecuta el servidor en el puerto establecido desde localhost
// Para ver la ejecución abra en el navegador la URL 
// localhost:3000
app.listen(PORT, ()=>{
    console.log (`Aplicación ejecutándose en el localhost puerto ${PORT}`); 
 })