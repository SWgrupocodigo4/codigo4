import { Request, Response } from "express";
import { BaseResponse } from "../shared/base-response";
import * as tipoActividadService from "../services/tipo-actividad.service";
import { TipoActividad } from "../entities/tipo-actividad";
import { Message } from "../enums/message";

export const insertarTipoActividad = async (req: Request, res: Response) => {
    try {
        console.log('insertarTipoActividad');
        const tipoActividad: Partial<TipoActividad> = req.body;
        const newTipoActividad: TipoActividad = await tipoActividadService.insertarTipoActividad(tipoActividad);
        res.json(BaseResponse.success(newTipoActividad, Message.INSERTADO_OK));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}

export const listarTipoActividades = async (req: Request, res: Response) => {
    try {
        console.log('listarTipoActividades');
        const tiposActividad: TipoActividad[] = await tipoActividadService.listarTiposActividad();
        res.json(BaseResponse.success(tiposActividad));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}

export const obtenerTipoActividad = async (req: Request, res: Response) => {
    try {
        const {idTipoActividad} = req.params;
        const tipoActividad: TipoActividad = await tipoActividadService.obtenerTipoActividad(Number(idTipoActividad));
        if(!tipoActividad) {
            res.status(404).json(BaseResponse.error(Message.NOT_FOUND,404));
            return;
        }
        res.json(BaseResponse.success(tipoActividad));

    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}

export const actualizarTipoActividad = async (req: Request, res: Response) => {
    try {
        const { idTipoActividad } = req.params;
                const tipoActividad: Partial<TipoActividad> = req.body;
                if(!(await tipoActividadService.obtenerTipoActividad(Number(idTipoActividad)))){
                    res.status(404).json(BaseResponse.error(Message.NOT_FOUND,404));
                    return;
                }
                const updateTipoActividad: TipoActividad = await tipoActividadService.actualizarTipoActividad(Number(idTipoActividad),tipoActividad);
                res.json(BaseResponse.success(updateTipoActividad, Message.ACTUALIZADO_OK));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}

export const darBajaTipoActividad = async (req: Request, res: Response) => {
    try {
        const { idTipoActividad } = req.params;
        if(!(await tipoActividadService.obtenerTipoActividad(Number(idTipoActividad)))){
            res.status(404).json(BaseResponse.error(Message.NOT_FOUND,404));
            return;
        }
        await tipoActividadService.darBajaTipoActividad(Number(idTipoActividad));
        res.json(BaseResponse.success(null, Message.ELIMINADO_OK));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}

