const express = require('express');
const sequelize = require('./config/database'); 
const app = express();
const Producto = require('./models/Producto'); 
const productoRoutes = require('./routes/productoRoutes'); 

app.use(express.json()); 
app.use('/api', productoRoutes); 

sequelize
.authenticate() 
.then(() => {
    console.log(
        'Conexión a la base de datos establecida correctamente.');
})
.catch(error => {
    console.error(
        'No se pudo conectar a la base de datos:', error);
});

app.listen(3000, () => {
    console.log('Servidor escuchando en http://localhost:3000');
});

sequelize.sync()
.then(() => {
    console.log('Base de datos sincronizada correctamente.');
})
.catch(error => {
    console.error(error);
});