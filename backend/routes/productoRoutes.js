const express = require('express');
const router = express.Router();

const {
    listarProductos,
    obtenerProductoPorId,
    registrarProducto,
    actualizarProducto,
    eliminarProducto,
    buscarProductos
} = require('../controllers/productoController');


router.get('/productos/buscar', buscarProductos);

router.get('/productos', listarProductos);

router.get('/productos/:id', obtenerProductoPorId);

router.post('/productos', registrarProducto);

router.put('/productos/:id', actualizarProducto);

router.delete('/productos/:id', eliminarProducto);

module.exports = router;