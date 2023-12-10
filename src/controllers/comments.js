const {insertarComentario,insertarValoracionComentario} = require('../services/functionsBD.js');
async function realizarComentario (req, res)
{
    const nombre = req.body.nombre;
    const receta = req.body.receta;
    const valoracion = req.body.valoracion;
    const comentario = req.body.comentario;

    if (!(valoracion === null))
    {
        const val = parseInt(valoracion);
        if ( !(val === 1 || val === 2 || val === 3 || val === 4 || val === 5)) 
        {
            return res.status(400).
            send({message : 'La valoración debe estar entre uno y cinco'});
        }

    }

    if(valoracion == null)
    {
        await insertarComentario(nombre, receta, comentario);
        return res.status(200).send({message: 'La valoración fue realizada exitosamente'});        
    }
    if(!(valoracion == null))
    {
        await insertarValoracionComentario(nombre, receta, comentario, parseInt(valoracion));
        return res.status(200).send({message: 'La valoración fue realizada exitosamente'});
    }
}

module.exports = {realizarComentario};