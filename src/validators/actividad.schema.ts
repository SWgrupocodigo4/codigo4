import Joi from "joi";

export const insertarActividadSchema = Joi.object({
    nombre: Joi.string().min(3).max(50).required(),
    descripcion: Joi.string().min(3).max(200),
    instalacion: Joi.object({
        idInstalacion: Joi.number().min(1).required()
    }),
    tipoActividad: Joi.object({
        idTipoActividad: Joi.number().required()
    }).min(1).required(),
    fechaInicio: Joi.date().required(),
    fechaFin: Joi.date().required(),
    nivelAccesoMaximo: Joi.number().min(1).required(),
    usuario: Joi.object({
        idUsuario: Joi.number().min(1).required()
    }).required()
});

export const actualizarActividadSchema = Joi.object({
    nombre: Joi.string().min(3).max(50),
    descripcion: Joi.string().min(3).max(200),
    instalacion: Joi.object({
        idInstalacion: Joi.number().min(1)
    }),
    tipoActividad: Joi.object({
        idTipoActividad: Joi.number().min(1)
    }),
    fechaInicio: Joi.date(),
    fechaFin: Joi.date(),
    nivelAccesoMaximo: Joi.number().min(1),
    usuario: Joi.object({
        idUsuario: Joi.number().min(1)
    })
});