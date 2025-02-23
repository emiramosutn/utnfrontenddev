var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/', async (req, res, next) => {
  var nombre = req.body.nombre;
  var apellido = req.body.apellido;
  var email = req.body.email;
  var tel = req.body.tel;
  var mensaje = req.body.mensaje;

  console.log(req.body); // Corrección aquí

  var obj = {
    to: 'vertex.grafica@gmail.com',
    subject: 'Contacto Web',
    html: `
      <p>${nombre} ${apellido} se contactó por medio de la web y quiere información a este correo: ${email}</p>
      <p>Además, hizo el siguiente comentario:</p>
      <p>${mensaje}</p>
      <p>Su teléfono es: ${tel}</p>
    `
  };

  try {
    var transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    var info = await transporter.sendMail(obj);

    res.render('index', {
      message: 'Mensaje enviado correctamente',
    });
  } catch (error) {
    console.error('Error enviando el correo:', error);
    res.render('index', {
      message: 'Ocurrió un error al enviar el mensaje.',
    });
  }
});

module.exports = router;
