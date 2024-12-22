import { Request, Response } from 'express';
import * as pagoService from '../services/pago.service';
import { Pago } from "../entities/pago";
import { BaseResponse } from '../shared/base-response';
import { Message } from '../enums/message';

export const insertarPago = async (req: Request, res: Response) => {
    try {
        console.log('insertarPago');
        const pago: Partial<Pago> = req.body;
        const newPago: Pago = await pagoService.insertarPago(pago)
        res.json(BaseResponse.success(newPago, Message.INSERTADO_OK));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}

export const listarPago = async (req: Request, res: Response) => {
    try {
        console.log('listarPago');
        const pagos: Pago[] = await pagoService.listarPago();
        res.json(BaseResponse.success(pagos));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}

export const obtenerPago = async (req: Request, res: Response) => {
    try {
        const { idPago } = req.params;
        const pago: Pago = await pagoService.obtenerPago(Number(idPago));
        if(!pago) {
            res.status(404).json(BaseResponse.error(Message.NOT_FOUND,404));
            return;
        }
        res.json(BaseResponse.success(pago));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}

export const actualizarPago = async (req: Request, res: Response) => {
    try {
        const { idPago } = req.params;
        const pago: Partial<Pago> = req.body;
        if(!(await pagoService.obtenerPago(Number(idPago)))){
            res.status(404).json(BaseResponse.error(Message.NOT_FOUND,404));
            return;
        }
        const updatePago: Pago = await pagoService.actualizarPago(Number(idPago),pago);
        res.json(BaseResponse.success(updatePago, Message.ACTUALIZADO_OK));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}

export const darBajaPago= async (req: Request, res: Response) => {
    try {
        const { idPago } = req.params;
        if(!(await pagoService.obtenerPago(Number(idPago)))){
            res.status(404).json(BaseResponse.error(Message.NOT_FOUND,404));
            return;
        }
        await pagoService.darBajaPago(Number(idPago));
        res.json(BaseResponse.success(null,Message.ELIMINADO_OK));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}