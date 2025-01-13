import Joi from "joi";

export const insertarTipoActividadSchema = Joi.object(
    {
        nombre: Joi.string().min(3).max(50).required(),
        descripcion: Joi.string().min(3).max(200)
    }
);

export const actualizarTipoActividadSchema = Joi.object(
    {
        nombre: Joi.string().min(3).max(50),
        descripcion: Joi.string().min(3).max(200)
    }
);