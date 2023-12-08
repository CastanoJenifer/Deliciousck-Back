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

const getTraditional = async () => {
    try
    {
        const traditional = await db.any('SELECT * FROM receta where tipo = $1',['Tradicional']);
        return traditional;
    }
    catch(error)
    {
        console.log(error);
        throw new Error('No se pudo obtener las recetas tradicionales');
    }
};

const getSauces = async () => {
    try
    {
        const sauces = await db.any('SELECT * FROM receta where tipo = $1',['Salsas']);
        return sauces;
    }
    catch(error)
    {
        console.log(error);
        throw new Error('No se pudo obtener las recetas de salsas');
    }
};

const getChristmas = async () => {
    try
    {
        const navidena = await db.any('SELECT * FROM receta where tipo = $1',['Navideña']);
        return navidena;
    }
    catch(error)
    {
        console.log(error);
        throw new Error('No se pudo obtener las recetas navideñas');
    }
};

const getDrinks = async () => {
    try
    {
        const bebidas = await db.any('SELECT * FROM receta where tipo = $1',['Bebidas']);
        return bebidas;
    }
    catch(error)
    {
        console.log(error);
        throw new Error('No se pudo obtener las recetas de bebidas');
    }
};

const getPastry = async () => {
    try
    {
        const reposteria = await db.any('SELECT * FROM receta where tipo = $1',['Repostería']);
        return reposteria;
    }
    catch(error)
    {
        console.log(error);
        throw new Error('No se pudo obtener las recetas de repostería');
    }
};
module.exports = {getRecipes, getTraditional,getSauces,getChristmas,getDrinks,getPastry};