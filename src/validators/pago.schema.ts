import Joi from "joi";

export const insertarPagoSchema = Joi.object({
    nombreConcepto: Joi.string().min(3).max(50).required(),
    descripcion: Joi.string().min(3).max(100),
    monto: Joi.number().precision(2).min(1).required()
});

export const actualizarPagoSchema = Joi.object({
    nombreConcepto: Joi.string().min(3).max(50),
    descripcion: Joi.string().min(3).max(100),
    monto: Joi.number().precision(2).min(1)
});