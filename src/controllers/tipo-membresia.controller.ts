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
        const {idTipoMembresia} = req.params;
        const tipoMembresia: TipoMembresia = await tipoMembresiaService.obtenerTipoMembresia(Number(idTipoMembresia));
        if(!tipoMembresia) {
            res.status(404).json(BaseResponse.error(Message.NOT_FOUND,404));
            return;
        }
        res.json(BaseResponse.success(tipoMembresia));

    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}

export const actualizarTipoMembresia = async (req: Request, res: Response) => {
    try {
        
        const { idTipoMembresia } = req.params;
                const tipomembresia: Partial<TipoMembresia> = req.body;
                if(!(await tipoMembresiaService.obtenerTipoMembresia(Number(idTipoMembresia)))){
                    res.status(404).json(BaseResponse.error(Message.NOT_FOUND,404));
                    return;
                }
                const updateTipoMembresia: TipoMembresia = await tipoMembresiaService.actualizarTipoMembresia(Number(idTipoMembresia),tipomembresia);
                res.json(BaseResponse.success(updateTipoMembresia, Message.ACTUALIZADO_OK));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}

export const darBajaTipoMembresia = async (req: Request, res: Response) => {
    try {
        const {idTipoMembresia} = req.params;
        if(!(await tipoMembresiaService.obtenerTipoMembresia(Number(idTipoMembresia)))){
            res.status(404).json(BaseResponse.error(Message.NOT_FOUND,404));
            return;
        }
        await tipoMembresiaService.darBajaTipoMembresia(Number(idTipoMembresia));
        res.json(BaseResponse.success(null, Message.ELIMINADO_OK));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}