let express = require('express');
let router = express.Router();
let heroesController = require("../controllers/heroesController");

// rutas de heroes 
router.get('/', heroesController.heroes);
router.get('/detalle/id/:id', heroesController.show);
router.get('/bio/id/:id:ok?', heroesController.detail);


module.exports = router;

