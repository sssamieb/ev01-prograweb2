const Producto = require('../models/Producto');
const { Op } = require('sequelize');

// GET /api/productos
const listarProductos = async (req, res) => {
    try {
        const productos = await Producto.findAll();
        res.status(200).json(productos);
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Error interno del servidor al obtener productos' });
    }
};

// GET /api/productos/:id
const obtenerProductoPorId = async (req, res) => {
    try {
        const { id } = req.params;
        const producto = await Producto.findByPk(id);

        if (!producto) {
            return res.status(404).json({ mensaje: "Producto no encontrado" });
        }

        res.status(200).json(producto);
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Error interno del servidor al buscar el producto' });
    }
};

// POST /api/productos
const registrarProducto = async (req, res) => {
    try {
        const nuevoProducto = await Producto.create(req.body);
        res.status(201).json(nuevoProducto);
    } catch (error) {
        if (error.name === 'SequelizeValidationError') {
            return res.status(400).json({ 
                mensaje: "Datos inválidos", 
                detalles: error.errors.map(e => e.message) 
            });
        }
        
        console.error(error);
        res.status(500).json({ mensaje: 'Error interno al registrar el producto' });
    }
};

// PUT /api/productos/:id
const actualizarProducto = async (req, res) => {
    try {
        const { id } = req.params;
        const producto = await Producto.findByPk(id);

        if (!producto) {
            return res.status(404).json({ mensaje: "Producto no encontrado" });
        }

        await producto.update(req.body);
        res.status(200).json(producto);

    } catch (error) {
        if (error.name === 'SequelizeValidationError') {
            return res.status(400).json({ 
                mensaje: "Datos inválidos", 
                detalles: error.errors.map(e => e.message) 
            });
        }
        console.error(error);
        res.status(500).json({ mensaje: 'Error interno al actualizar el producto' });
    }
};

// DELETE /api/productos/:id
const eliminarProducto = async (req, res) => {
    try {
        const { id } = req.params;
        const producto = await Producto.findByPk(id);

        if (!producto) {
            return res.status(404).json({ mensaje: "Producto no encontrado" });
        }

        await producto.destroy();
        
        res.status(200).json({ mensaje: "Producto eliminado correctamente" });

    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Error interno al eliminar el producto' });
    }
};

// GET /api/productos/buscar?nombre=texto
const buscarProductos = async (req, res) => {
    try {
        const { nombre } = req.query;

        const productos = await Producto.findAll({
            where: {
                nombre: {
                    [Op.like]: `%${nombre || ''}%` 
                }
            }
        });

        res.status(200).json(productos);

    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Error interno al buscar productos' });
    }
};

module.exports = {
    listarProductos,
    obtenerProductoPorId,
    registrarProducto,
    actualizarProducto,
    eliminarProducto,
    buscarProductos
};