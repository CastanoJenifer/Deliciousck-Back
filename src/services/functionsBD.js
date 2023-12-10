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

const getRecipeById = async (id) => {
    try
    {
        const recetaById = await db.one('SELECT r.nombre, r.tipo, r.tiempoduracion, r.imagenprincipal FROM receta r where r.cod = $1',[id]);
        return recetaById;
    }
    catch(error)
    {
        console.log(error);
        throw new Error('No se pudo obtener la receta');
    }
};

const getSteps = async (id) => {
    try
    {
        const steps = await db.many('select p.numpaso, p.descripcion from pasos p where p.receta = $1 ',[id]);
        return steps;
    }
    catch(error)
    {
        console.log(error);
        throw new Error('No se pudo obtener los pasos');
    }
};

const getIngredients = async (id) => {
    try
    {
        const ingredients = await db.many('select distinct i.ingrediente from recetaingrediente ri inner join ingredientes i on ri.ingrediente = i.id where ri.receta = $1;',[id]);
        return ingredients;
    }
    catch(error)
    {
        console.log(error);
        throw new Error('No se pudo obtener los ingredientes');
    }
};

const getTools = async (id) => {
    try
    {
        const tools = await db.many('SELECT distinct h.nombre from recetaherramienta rh inner join herramientas h on rh.herramienta = h.id where rh.receta = $1;',[id]);
        return tools;
    }
    catch(error)
    {
        console.log(error);
        throw new Error('No se pudo obtener las herramientas');
    }
};

const filter = async (tiempoduracion) => {
    try
    {
        let query = 'SELECT DISTINCT r.nombre, r.tipo, r.tiempoduracion, r.imagenprincipal FROM receta r join recetaingrediente ri on r.cod = ri.receta join ingredientes i on ri.ingrediente = i.id inner join pasos p on p.receta = r.cod where 1=1 ';

        if (tiempoduracion) 
        {
            query += `AND SUBSTRING(CAST(r.tiempoduracion AS VARCHAR), 2, 1) = CAST(${tiempoduracion} AS VARCHAR)` ;
        }
        const recetasF = await db.any(query);
        return recetasF;
    }
    catch(error)
    {
        console.log(error);
        throw new Error('No se pudo obtener las herramientas');
    }
};

const getAllComments = async (receta) =>
{
    try
    {
        const resultado = await db.manyOrNone('SELECT * FROM comentarios WHERE codreceta = $1 ',[receta])
        if(resultado)
        {
            return resultado;
        }
        else
        {
            return null;
        }
    }
    catch(error)
    {
        console.log(error);
        throw new Error('No se pudo obtener los comentarios');
    }
};

const insertarComentario = async(nombre, receta, comentario) =>
{
    try
    {
        db.none('INSERT INTO comentarios (nombrepersona, codreceta, comentario) VALUES($1, $2, $3)' , 
        [nombre, receta, comentario]);
    }
    catch(error)
    {
        console.log(error);
        throw new Error('No se pudo realizar el comentario');
    }
}
const insertarValoracionComentario = async(nombre, receta, comentario, valoracion) =>
{
    try
    {
        db.none('INSERT INTO comentarios (nombrepersona, codreceta, comentario, valoracion) VALUES($1, $2, $3, $4)' ,
        [nombre, receta,comentario, valoracion]);
    }
    catch(error)
    {
        console.log(error);
        throw new Error('No se pudo realizar la valoracion');
    }
}

module.exports = {
    getRecipes, 
    getTraditional,
    getSauces,
    getChristmas,
    getDrinks,
    getPastry,
    getRecipeById,
    getSteps,
    getIngredients,
    getTools,
    filter,
    getAllComments,
    insertarComentario,
    insertarValoracionComentario};