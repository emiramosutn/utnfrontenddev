var express = require('express');
var router = express.Router();


router.get('/', function (req, res, next) {
    res.render('agenda'); // agenda.hbs
});

module.exports = router;