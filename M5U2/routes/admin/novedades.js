var express = require('express');
var router = express.Router();
var novedadesModel = require('../../models/novedadesModel')


// Listar las Novedades
router.get('/', async function (req, res, next) {

var novedades = await novedadesModel.getNovedades();

    res.render('admin/novedades', { //novedades.hbs
        layout: 'admin/layout',
        usuario: req.session.nombre,
        novedades
    });
});

// Eliminar la novedad
router.get('/eliminar/:id', async (req, res, next) => {
    var id = req.params.id;
    await novedadesModel.deleteNovedadesById(id);
    res.redirect('/admin/novedades')
    
    });


// Formulario de alta
router.get('/agregar', (req, res, next) => {
    res.render('admin/agregar', {
        layout: 'admin/layout'
    });
});

router.post('/agregar', async (req, res, next) => {
    try {
        if (req.body.titulo != "" && req.body.subtitulo != "" && req.body.cuerpo != "") {
            await novedadesModel.insertNovedad(req.body);
            res.redirect('/admin/novedades')
        }else{
            res.render('admin/agregar', {
                layout: 'admin/layout',
                error: true, message: 'Todods los campos son requeridos'
            })
        }
    } catch (error) {
        console.log(error)
        res.render('admin/agregar', {
            layout: 'admin/layout',
            error: true, message: 'No se cargo la novedad'
        });
    }
});


module.exports = router;