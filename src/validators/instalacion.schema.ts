import Joi from "joi";

export const insertarInstalacionSchema = Joi.object({
    nombre: Joi.string().min(3).max(50).required(),
    descripcion: Joi.string().min(3).max(200),
    aforoMaximo: Joi.number().min(1)
});

export const actualizarInstalacionSchema = Joi.object({
    nombre: Joi.string().min(3).max(50),
    descripcion: Joi.string().min(3).max(200),
    aforoMaximo: Joi.number().min(1)
});