const {getRecetasBynombre} = require('../services/functionsBD.js');
const search = async (req, res) => {
    try{
        const searchParam = req.params.nombre;
    
        const [key, value] = searchParam.split('=');
        console.log(key, value);
        const resultado = await getRecetasBynombre(value);
    
        if (resultado.length === 0) {
            return res.status(404).json({message: 'No se encontraron recetas'});
        }
    
        res.status(200).json(resultado);
    
        console.log('Parámetro de búsqueda:', key, value);
    }catch(error){
        console.log(error);
        res.status(400).json(error.message);
    }
};



module.exports = search;
