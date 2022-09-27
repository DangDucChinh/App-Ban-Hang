const express = require('express') ; 
const router = express.Router() ; 
const indexController = require('../controllers/index') ; 


router.get('/', indexController.getIndex); 
router.get('/ejs', indexController.getEJS); 

module.exports = router ; 