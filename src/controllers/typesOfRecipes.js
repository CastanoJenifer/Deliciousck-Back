const {getTraditional,getSauces,getChristmas,getDrinks,getPastry} = require('../services/functionsBD.js');
const formatTime = require('../services/functionsRepeats.js');

async function traditionalRecipe (req, res)
{
    try{

        const traditionalRecipes = await getTraditional();
  
        if (traditionalRecipes.length === 0) {
          return res.status(404).json({message: 'No se encontraron recetas tradicionales'});
        }
        else
        {
            traditionalRecipes.forEach(element => 
                {
                element.tiempoduracion = formatTime(element.tiempoduracion);
                }
            );  
            return res.status(200).json(traditionalRecipes);
        }
    }
    catch(error)
    {
        console.log(error);
        res.status(400).json(error.message);
    }
};

async function christmasRecipe (req, res)
{
    try{

        const christmasRecipes = await getChristmas();
  
        if (christmasRecipes.length === 0) {
          return res.status(404).json({message: 'No se encontraron recetas navideñas'});
        }
        else
        {
            christmasRecipes.forEach(element => 
                {
                element.tiempoduracion = formatTime(element.tiempoduracion);
                }
            );  
            return res.status(200).json(christmasRecipes);
        }
    }
    catch(error)
    {
        console.log(error);
        res.status(400).json(error.message);
    }
};

async function saucesRecipe (req, res)
{
    try{

        const saucesRecipes = await getSauces();
  
        if (saucesRecipes.length === 0) {
          return res.status(404).json({message: 'No se encontraron recetas de salsas'});
        }
        else
        {
            saucesRecipes.forEach(element => 
                {
                element.tiempoduracion = formatTime(element.tiempoduracion);
                }
            );  
            return res.status(200).json(saucesRecipes);
        }
    }
    catch(error)
    {
        console.log(error);
        res.status(400).json(error.message);
    }
};

async function drinksRecipe (req, res)
{
    try{

        const drinksRecipes = await getDrinks();
  
        if (drinksRecipes.length === 0) {
          return res.status(404).json({message: 'No se encontraron recetas de bebidas'});
        }
        else
        {
            drinksRecipes.forEach(element => 
                {
                element.tiempoduracion = formatTime(element.tiempoduracion);
                }
            );  
            return res.status(200).json(drinksRecipes);
        }
    }
    catch(error)
    {
        console.log(error);
        res.status(400).json(error.message);
    }
};


async function pastryRecipe (req, res)
{
    try{

        const pastryRecipes = await getPastry();
  
        if (pastryRecipes.length === 0) {
          return res.status(404).json({message: 'No se encontraron recetas de repostería'});
        }
        else
        {
            pastryRecipes.forEach(element => 
                {
                element.tiempoduracion = formatTime(element.tiempoduracion);
                }
            );  
            return res.status(200).json(pastryRecipes);
        }
    }
    catch(error)
    {
        console.log(error);
        res.status(400).json(error.message);
    }
};

module.exports = {traditionalRecipe, christmasRecipe, saucesRecipe,drinksRecipe,pastryRecipe};