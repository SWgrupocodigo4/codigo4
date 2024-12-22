import { Request, Response } from "express";
import { BaseResponse } from "../shared/base-response";
import * as tipoMembresiaService from "../services/tipo-membresia.service";
import { TipoMembresia } from "../entities/tipo-membresia";
import { Message } from "../enums/message";

export const insertarTipoMembresia = async (req: Request, res: Response) => {
    try {
        console.log('insertarTipoMembresia');
        const tipoMembresia: Partial<TipoMembresia> = req.body;
        const newTipoMembresia: TipoMembresia = await tipoMembresiaService.insertarTipoMembresia(tipoMembresia);
        res.json(BaseResponse.success(newTipoMembresia, Message.INSERTADO_OK));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}

export const listarTiposMembresia = async (req: Request, res: Response) => {
    try {
        console.log('listarTiposMembresia');
        const tiposMembresia: TipoMembresia[] = await tipoMembresiaService.listarTiposMembresia();
        res.json(BaseResponse.success(tiposMembresia));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}

export const obtenerTipoMembresia = async (req: Request, res: Response) => {
    try {
        console.log('obtenerTipoMembresia');
        const id = Number(req.params.id);
        const tipoMembresia: TipoMembresia = await tipoMembresiaService.obtenerTipoMembresia(id);
        res.json(BaseResponse.success(tipoMembresia));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}

export const actualizarTipoMembresia = async (req: Request, res: Response) => {
    try {
        console.log('actualizarTipoMembresia');
        const id = Number(req.params.id);
        const tipoMembresia: Partial<TipoMembresia> = req.body;
        const updatedTipoMembresia: TipoMembresia = await tipoMembresiaService.actualizarTipoMembresia(id, tipoMembresia);
        res.json(BaseResponse.success(updatedTipoMembresia, Message.ACTUALIZADO_OK));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}

export const darBajaTipoMembresia = async (req: Request, res: Response) => {
    try {
        console.log('darBajaTipoMembresia');
        const id = Number(req.params.id);
        await tipoMembresiaService.darBajaTipoMembresia(id);
        res.json(BaseResponse.success(null, Message.ELIMINADO_OK));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}