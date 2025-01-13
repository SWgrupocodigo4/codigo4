import Joi from "joi";

export const insertarTipoMembresiaSchema = Joi.object({
    nombre: Joi.string().min(3).max(50).required(),
    descripcion: Joi.string().min(3).max(200),
    nivelAcceso: Joi.number().min(1).required(),
    costoMensual: Joi.number().min(1).precision(2).required()
});

export const actualizarTipoMembresiaSchema = Joi.object({
    nombre: Joi.string().min(3).max(50),
    descripcion: Joi.string().min(3).max(200),
    nivelAcceso: Joi.number().min(1),
    costoMensual: Joi.number().min(1).precision(2)
});