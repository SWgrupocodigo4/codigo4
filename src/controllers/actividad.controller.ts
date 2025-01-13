import { Request, Response } from "express";
import { BaseResponse } from "../shared/base-response";
import * as actividadService from "../services/actividad.service";
import { Actividad } from "../entities/actividad";
import { Message } from "../enums/message";
import { insertarActividadSchema, actualizarActividadSchema } from "../validators/actividad.schema";

export const insertarActividad = async (req: Request, res: Response) => {
    try {
        console.log('insertarActividad');
        const { error } = insertarActividadSchema.validate(req.body);
        if (error) {
            res.status(400).json(BaseResponse.error(error.message, 400));
            return;
        }
        const actividad: Partial<Actividad> = req.body;
        const newActividad: Actividad = await actividadService.insertarActividad(actividad);
        res.json(BaseResponse.success(newActividad, Message.INSERTADO_OK));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}

export const listarActividades = async (req: Request, res: Response) => {
    try {
        console.log('listarActividades');
        const actividades: Actividad[] = await actividadService.listarActividades();
        res.json(BaseResponse.success(actividades));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}

export const obtenerActividad = async (req: Request, res: Response) => {
    try {
        const { idActividad } = req.params;
        const actividad: Actividad = await actividadService.obtenerActividad(Number(idActividad));
        if (!actividad) {
            res.status(404).json(BaseResponse.error(Message.NOT_FOUND, 404));
            return;
        }
        res.json(BaseResponse.success(actividad));

    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}

export const actualizarActividad = async (req: Request, res: Response) => {
    try {
        const { idActividad } = req.params;
        const { error } = actualizarActividadSchema.validate(req.body);
        if (error) {
            res.status(400).json(BaseResponse.error(error.message, 400));
            return;
        }
        const actividad: Partial<Actividad> = req.body;
        if (!(await actividadService.obtenerActividad(Number(idActividad)))) {
            res.status(404).json(BaseResponse.error(Message.NOT_FOUND, 404));
            return;
        }
        const updateActividad: Actividad = await actividadService.actualizarActividad(Number(idActividad), actividad);
        res.json(BaseResponse.success(updateActividad, Message.ACTUALIZADO_OK));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}

export const darBajaActividad = async (req: Request, res: Response) => {
    try {
        const { idActividad } = req.params;
        if (!(await actividadService.obtenerActividad(Number(idActividad)))) {
            res.status(404).json(BaseResponse.error(Message.NOT_FOUND, 404));
            return;
        }
        await actividadService.darBajaActividad(Number(idActividad));
        res.json(BaseResponse.success(null, Message.ELIMINADO_OK));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}


