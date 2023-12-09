const formatTime = require('../services/functionsRepeats.js');
const {getRecipeById, getSteps, getIngredients, getTools} = require('../services/functionsBD.js');

async function recipeBody (req, res)
{
    try
    {
        const receta = req.params.id;
        const recetaById = [await getRecipeById(receta)];
        const pasos = await getSteps(receta);
        const ingredientes = await getIngredients(receta);
        const herramientas = await getTools(receta);
        

        if (!recetaById) 
        {
          return res.status(404).json({message: 'No se encontró la receta'});
        }
        if (!pasos)
        {
            return res.status(404).json({message: 'No se encontró los pasos'});
        }
        if (!ingredientes) 
        {
            return res.status(404).json({message: 'No se encontró los ingredientes'});
        }
        if (!herramientas) 
        {
            return res.status(404).json({message: 'No se encontró las herramientas'});
        }
  
        recetaById.forEach(element => {
            element.tiempoduracion = formatTime(element.tiempoduracion);
        });
        
        return res.status(200).json({receta: recetaById, pasos: pasos, ing: ingredientes, her: herramientas});
    }
    catch(error)
    {
        console.log(error);
        res.status(400).json(error.message);
    }
}

module.exports = recipeBody;