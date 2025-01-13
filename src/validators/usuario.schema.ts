import Joi from "joi";

export const insertarUsuarioSchema = Joi.object({
    usuario: Joi.string().min(3).max(50).required(),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,32}$')),
    nombre: Joi.string().min(3).max(50).required(),
    apellido: Joi.string().min(3).max(50).required(),
    correo: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net','es'] } }),
    rol: Joi.object({
        idRol: Joi.number().required()
    }).required()
});

export const actualizarUsuarioSchema = Joi.object({
    usuario: Joi.string().min(3).max(50),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,32}$')),
    nombre: Joi.string().min(3).max(50),
    apellido: Joi.string().min(3).max(50),
    correo: Joi.string().min(3).max(50).email({ minDomainSegments: 2, tlds: { allow: ['com', 'net','es'] } }),
    rol: Joi.object({
        idRol: Joi.number().required()
    }).required()
});