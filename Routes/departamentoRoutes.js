const express = require('express');
const router = express.Router();
const departamentoController = require('../controller/departamentoController')

router.get('/departamento', departamentoController.obtenerDpto)
router.post('/departamento', departamentoController.crearDpto)
router.put('/departamento/:id', departamentoController.updateDpto)
router.delete('/departamento/:id', departamentoController.deleteDpto)

module.exports= router; 