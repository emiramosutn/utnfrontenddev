var express = require('express');
var router = express.Router();
var usuariosModel = require('../../models/usuariosModel');


router.get('/', async function (req, res, next) {
    res.render('admin/login', { //login.hbs
        layout: 'admin/layout'
    });
});

// Para destruir variables de sesion
router.get('/logout', function (req, res, next){
    req.session.destroy();
    res.render('admin/login',{
        layout: 'admin/layout'
    });
});




router.post('/', async (req, res, next) => {
    console.log("Datos recibidos en req.body:", req.body);

    try {
        var usuario = req.body.usuario;
        var password = req.body.password;

        console.log(req.body);

        var data = await usuariosModel.getUserAndPassword(usuario, password);



        if (data != undefined) {
            req.session.id_usuario = data.id;
            req.session.nombre = data.usuario;
                res.redirect('/admin/novedades');
        } else {
            res.render('admin/login', {
                layout: 'admin/layout',
                error: true
            });
        }
    } catch (error) {
        console.log("Error en login:", error);
    }
});




module.exports = router;