import Joi from "joi";

export const insertarRolSchema = Joi.object({
    descripcion: Joi.string().min(3).max(20).required(),
    estadoAuditoria: Joi.string().max(1).required()
});

export const actualizarRolSchema = Joi.object({
    descripcion: Joi.string().min(3).max(20),
    estadoAuditoria: Joi.string().max(1)
});