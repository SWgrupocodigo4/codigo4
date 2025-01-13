import Joi from "joi";

export const insertarParticipacionSchema = Joi.object({
    socio: Joi.object({
        idSocio: Joi.number().integer().min(1).required()
    }).required(),
    actividad: Joi.object({
        idActividad: Joi.number().integer().min(1).required()
    }).required(),
});

export const actualizarParticipacionSchema = Joi.object({
    socio: Joi.object({
        idSocio: Joi.number().integer().min(1)
    }),
    actividad: Joi.object({
        idActividad: Joi.number().integer().min(1)
    })
});