const db = require('../db');

const getRecipes = async () => {
    try{
    const recipes = await db.any('SELECT * FROM receta');
    return recipes;
    }catch(error){
        console.log(error);
        throw new Error('No se pudo obtener las recetas');
    }
};

const getRecipe = async () =>
{
    try{
        const recipes = await db.any('SELECT * FROM receta');
        return recipes;
        }catch(error){
            console.log(error);
            throw new Error('No se pudo obtener las recetas');
        }
};

    

module.exports = {getRecipes, getRecipe};