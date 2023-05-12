const express = require('express');
const path = require('path');
const fs = require('fs');
const { render, name } = require('ejs');
const router = express.Router();  // Se crea una instancia de router para gestionar las rutas del
                                // módulo usuario. 
router.get('/', function(req, res, next) {
    let urlFile = path.join(__dirname,'../data/usuarios.json');

    let users = fs.readFileSync(urlFile);
    users = JSON.parse(users);

    res.render('users/allUsers',{lista:users}); // lees recuperas y lo pasas a lista

});



// ruta para buscar  un ususario del archivo usuarios.json
router.get('/findUser', function(req, res, next) {

//Recuperar el parametro name de la url de la ruta
// localhost:3000/user/findUser?name=Carlos se coloca en el navegador
let nonombre = req.query.name || '';
let urlFile = path.join(__dirname,'../data/usuarios.json');
let correo = req.query.email || '';
    let users = fs.readFileSync(urlFile);
    users = JSON.parse(users);
 datoUser = {};

 for(user of users){
     if(user.name === nonombre){
        datoUser.name =user.name;         
        datoUser.email =user.email;
         break;
   }
}

// Desplegar la plantilla getUser que muestra los datos del ususario
// que se pasa como parametro

res.render('users/getUser',{name:nonombre,email:correo});

console.log(nonombre);
console.log(correo);

});

module.exports = router; // 


//Agregar otra ruta para un solo usuario