import Joi from "joi";

export const insertarSocioPagoSchema = Joi.object({
    socio: Joi.object({
        idSocio: Joi.number().integer().min(1).required()
    }),
    pago: Joi.object({
        idPago: Joi.number().integer().min(1).required()
    })
});

export const actualizarSocioPagoSchema = Joi.object({
    socio: Joi.object({
        idSocio: Joi.number().integer().min(1)
    }),
    pago: Joi.object({
        idPago: Joi.number().integer().min(1)
    })
});