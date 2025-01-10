import { Request, Response } from "express"
import { BaseResponse } from "../shared/base-response";
import * as participacionService from "../services/participacion.service";
import {Participacion} from "../entities/participacion";
import { Message } from "../enums/message";

export const insertarParticipacion = async (req: Request, res: Response) => {
    try {
        console.log('insertarParticipacion');
        const participacion: Partial<Participacion> = req.body;
        const newParticipacion: Participacion = await participacionService.insertarParticipacion(participacion);
        res.json(BaseResponse.success(newParticipacion, Message.INSERTADO_OK));
        
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}

export const listarParticipaciones = async (req: Request, res: Response) => {
    try {
        const participacion: Participacion[] = await participacionService.listarParticipaciones();
        res.json(BaseResponse.success(participacion));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}

export const obtenerParticipacion = async (req: Request, res: Response) => {
    try {
        const { idParticipacion } = req.params;
        const participacion: Participacion = await participacionService.obtenerParticipacion(Number(idParticipacion));
        if (!participacion) {
            res.status(404).json(BaseResponse.error(Message.NOT_FOUND, 404));
            return;
        }
        res.json(BaseResponse.success(participacion));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}

export const actualizarParticipacion = async (req: Request, res: Response) => {
    try {
        const { idParticipacion } = req.params;
        const participacion: Partial<Participacion> = req.body;
        await participacionService.actualizarParticipacion(Number(idParticipacion), participacion);
        res.json(BaseResponse.success(null, Message.ACTUALIZADO_OK));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}

export const darBajaParticipacion = async (req: Request, res: Response) => {
    try {
        const { idParticipacion } = req.params;
        await participacionService.darBajaParticipacion(Number(idParticipacion));
        res.json(BaseResponse.success(null, Message.ELIMINADO_OK));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}




