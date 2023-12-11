const express = require('express');
const router = express.Router();
const routerReceps = express.Router();
const {getAllRecipes} = require('../controllers/allRecipes.js');
const {traditionalRecipe, christmasRecipe, saucesRecipe,drinksRecipe,pastryRecipe} = require('../controllers/typesOfRecipes.js');
const recipeBody = require('../controllers/recipeBody.js');
const {filterRecipes} = require('../controllers/filters.js');
const search = require('../controllers/searcher.js');
const {sendAllComments} = require('../controllers/comments.show.js');
const {realizarComentario} = require('../controllers/comments.js');

router.use(express.json());


router.get('/allrecipes', getAllRecipes);
routerReceps.get('/tradicional', traditionalRecipe);
routerReceps.get('/navidena', christmasRecipe);
routerReceps.get('/salsas', saucesRecipe);
routerReceps.get('/bebidas', drinksRecipe);
routerReceps.get('/reposteria', pastryRecipe);
routerReceps.get('/body/:id', recipeBody);
routerReceps.get('/filters', filterRecipes);
routerReceps.get('/search/:nombre', search);
routerReceps.get('/mostrarComentarios/:id', sendAllComments);

routerReceps.post('/realizarComentario', realizarComentario);

module.exports = {router, routerReceps};