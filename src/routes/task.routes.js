const router = require('express').Router();
const allrecetas = require('../controllers/allRecipes.js');


router.get('/allrecipes', allrecetas);

module.exports = router;