
const {getRecipes} = require('../services/functionsBD.js');
const formatTime = require('../services/functionsRepeats.js');

async function getAllRecipes (req, res)
{
    try
    {

        const recipes = await getRecipes();
  
        if (recipes.length === 0) {
          return res.status(404).json({message: 'No se encontraron recetas'});
        }
        else
        {
            recipes.forEach(element => {
                element.tiempoduracion = formatTime(element.tiempoduracion);
            });
            
            return res.status(200).json(recipes);
        }

    }
    catch(error)
    {
        console.log(error);
        res.status(400).json(error.message);
    }
};

module.exports = {getAllRecipes};
