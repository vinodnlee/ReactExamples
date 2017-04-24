var express = require('express');
var router  = express.Router();
var processor = require('../controller/processor');
var rankprocessor=require('../controller/rankprocessor');
router.get('/',processor.main);
router.get('/:rank',rankprocessor.main);
module.exports = router;


