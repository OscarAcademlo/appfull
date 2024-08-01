var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer')

/* GET home page. */
router.get('/', function(req, res) {
  res.render('contacto');
});

router.post('/', async (req, res) => {
  var nombre = req.body.nombre;
  var apellido = req.body.apellido;
  var email= req.body.email
  var texto=req.body.texto

  var obj = {
    to: 'oscarns@gmail.com',
    subject: 'CONTACTO WEB',
    html: nombre + "se contacto a través de la web y quiere mas información a este correo : " + email + ".<br> Además, hizo el comentario : " + texto + ". <br> Su nombre es : " + nombre + apellido
}
var transport = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  auth:{
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
  }
});



var info= await transport.sendMail(obj);
res.render('index',{
    message: "Mensaje enviado correctamente"
});
  

});


module.exports = router;