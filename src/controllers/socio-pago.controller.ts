import { Request, Response } from "express"
import { BaseResponse } from "../shared/base-response";
import * as socioPagoService from "../services/socio-pago.service";
import {SocioPago} from "../entities/socio-pago";
import { Socio } from "../entities/socio";
import { Pago } from '../entities/pago';
import { Message } from "../enums/message";

export const insertarSocioPago = async (req: Request, res: Response) => {
    try {
        console.log('insertarSocioPago');
        const socioPago: Partial<SocioPago> = req.body;
        const newSocioPago: SocioPago = await socioPagoService.insertarSocioPago(socioPago);
        res.json(BaseResponse.success(newSocioPago, Message.INSERTADO_OK));
        
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}

export const listarSocioPago = async (req: Request, res: Response) => {
    try {
        const socioPago: SocioPago[] = await socioPagoService.listarSocioPago();
        res.json(BaseResponse.success(socioPago));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}

export const obtenerSocioPago = async (req: Request, res: Response) => {
    try {
        const { idSocioPago } = req.params;
        const socioPago: SocioPago = await socioPagoService.obtenerSocioPago(Number(idSocioPago));
        if (!socioPago) {
            res.status(404).json(BaseResponse.error(Message.NOT_FOUND, 404));
            return;
        }
        res.json(BaseResponse.success(socioPago));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}

export const actualizarSocioPago = async (req: Request, res: Response) => {
    try {
        const { idSocioPago } = req.params;
        const socioPago: Partial<SocioPago> = req.body;
        await socioPagoService.actualizarSocioPago(Number(idSocioPago), socioPago);
        res.json(BaseResponse.success(null, Message.ACTUALIZADO_OK));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}

export const darBajaSocioPago = async (req: Request, res: Response) => {
    try {
        const { idSocioPago } = req.params;
        if(!(await socioPagoService.obtenerSocioPago(Number(idSocioPago)))){
            res.status(404).json(BaseResponse.error(Message.NOT_FOUND,404));
            return;
        }
        await socioPagoService.darBajaSocioPago(Number(idSocioPago));
        res.json(BaseResponse.success(null, Message.ELIMINADO_OK));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}