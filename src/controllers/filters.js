const {filter} = require('../services/functionsBD.js');

async function filterRecipes(req, res) 
{
    try 
    {
      const {tiempoduracion,numpasos, ingredientes} = req.body;
      const recetasFiltradas = await filter(tiempoduracion, numpasos, ingredientes);
      if(!recetasFiltradas) 
      {
        return res.status(404).send({message: 'Ocurrió un error al filtrar las recetas'});
      }

      return res.status(200).send(recetasFiltradas);
    } 
    catch (error) 
    {
      console.error(error);
      res.status(500).json({ error: 'Error al filtrar las recetas' });
    }
  }
  
  module.exports = {filterRecipes};
  