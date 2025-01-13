import Joi from "joi";

export const insertarSocioSchema = Joi.object({
    nombre: Joi.string().min(3).max(50).required(),
    apellido_paterno: Joi.string().min(3).max(50).required(),
    apellido_materno: Joi.string().min(3).max(50).required(),
    tipo_documento: Joi.string().valid('DNI', 'RUC', 'CE'),
    nro_documento: Joi.string().min(8).max(20).required(),
    correo: Joi.string().min(3).max(50).email({ minDomainSegments: 2, tlds: { allow: false } }).required(),
    telefono: Joi.string().min(3).max(15),
    tipoMembresia: Joi.object({
        idTipoMembresia: Joi.number().min(1).required()
    }).required(),
});

export const actualizarSocioSchema = Joi.object({
    nombre: Joi.string().min(3).max(50),
    apellido_paterno: Joi.string().min(3).max(50),
    apellido_materno: Joi.string().min(3).max(50),
    tipo_documento: Joi.string().valid('DNI', 'RUC', 'CE'),
    nro_documento: Joi.string().min(8).max(20),
    correo: Joi.string().min(3).max(50).email({ minDomainSegments: 2, tlds: { allow: false } }),
    telefono: Joi.string().min(3).max(15),
    tipoMembresia: Joi.object({
        idTipoMembresia: Joi.number().min(1)
    }),
});