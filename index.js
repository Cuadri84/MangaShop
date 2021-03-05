const express = require('express');
const path = require('path');



//conexion con mongo
const { mongoose } = require ('./database');



const app = express();

// Archivos estaticos
app.use(express.static(path.join(__dirname, 'client/build')));

// Lista de mangas
app.get('/api/getList', (req,res) => {
    var list = ["item1", "item2", "tercero"]; //este array es el que nos va a mostrar al final, aqui sera seguramente la llamada a la base de datos
    res.json(list);
    console.log('Sent list of items');
});

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});
//aqui decimos que la ruta para el react es client

const port = process.env.PORT || 5000; //aqui lee el port que le da heroku o el 5000 en local
app.listen(port);

console.log('App is listening on port ' + port);