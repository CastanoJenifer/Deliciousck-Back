const {getAllComments} = require('../services/functionsBD.js');

const sendAllComments = async (req, res) => {
    const receta = req.params.id;
    try
    {
        const comentarios = await getAllComments(receta);
        return res.status(200).send({message: "Los comentarios se han enviado correctamente", com: comentarios});
    }
    catch(error)
    {
        console.error('Error al obtener las valoraciones', error);
        throw error;
    }
}

module.exports = {sendAllComments};