const express = require('express');
const router = express.Router();
const routerReceps = express.Router();
const {getAllRecipes} = require('../controllers/allRecipes.js');
const {traditionalRecipe, christmasRecipe, saucesRecipe,drinksRecipe,pastryRecipe} = require('../controllers/typesOfRecipes.js');
const recipeBody = require('../controllers/recipeBody.js');

router.use(express.json());


router.get('/allrecipes', getAllRecipes);
routerReceps.get('/tradicional', traditionalRecipe);
routerReceps.get('/navidena', christmasRecipe);
routerReceps.get('/salsas', saucesRecipe);
routerReceps.get('/bebidas', drinksRecipe);
routerReceps.get('/reposteria', pastryRecipe);
routerReceps.get('/body/:id', recipeBody);

module.exports = {router, routerReceps};