const express = require('express');
const router = express.Router();
const municipioController = require('../controller/municipioController')

router.get('/municipio', municipioController.obtenerMunicipio )
router.post('/municipio', municipioController.crearMunicipio)
router.put('/municipio/:id', municipioController.updateMunicipio)
router.delete('/municipio/:id', municipioController.deleteMunicipio)
module.exports= router;