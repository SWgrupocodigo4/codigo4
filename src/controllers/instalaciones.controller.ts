import { Request, Response } from "express";
import { BaseResponse } from "../shared/base-response";
import * as instalacionesService from "../services/instalaciones.service";
import { Instalacion } from "../entities/instalaciones";
import { Message } from "../enums/message";

export const insertarInstalaciones = async (req: Request, res: Response) => {
    try {
        console.log('insertarInstalacion');
        const instalacion: Partial<Instalacion> = req.body;
        const newInstalacion: Instalacion = await instalacionesService.insertarInstalaciones(instalacion);
        res.json(BaseResponse.success(newInstalacion, Message.INSERTADO_OK));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}

export const listarInstalaciones = async (req: Request, res: Response) => {
    try {
        console.log('listarInstalaciones');
        const instalaciones: Instalacion[] = await instalacionesService.listarInstalaciones();
        res.json(BaseResponse.success(instalaciones));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}

export const obtenerInstalaciones = async (req: Request, res: Response) => {
    try {
        const {idInstalacion} = req.params;
        const instalacion: Instalacion = await instalacionesService.obtenerInstalaciones(Number(idInstalacion));
        
        if(!instalacion) {
            res.status(404).json(BaseResponse.error(Message.NOT_FOUND,404));
            return;
        }
        res.json(BaseResponse.success(instalacion));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}

export const actualizarInstalaciones = async (req: Request, res: Response) => {
    try {
        const {idInstalacion} = req.params;
        const instalacion: Partial<Instalacion> = req.body;
        if(!(await instalacionesService.obtenerInstalaciones(Number(idInstalacion)))){
            res.status(404).json(BaseResponse.error(Message.NOT_FOUND,404));
            return;
        }
        res.json(BaseResponse.success(actualizarInstalaciones, Message.ACTUALIZADO_OK));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}

export const darBajaInstalaciones = async (req: Request, res: Response) => {
    try {
        const {idInstalacion} = req.params;
        if(!(await instalacionesService.obtenerInstalaciones(Number(idInstalacion)))){
            res.status(404).json(BaseResponse.error(Message.NOT_FOUND,404));
            return;
        }
        await instalacionesService.darBajaInstalaciones(Number(idInstalacion));
        res.json(BaseResponse.success(null, Message.ELIMINADO_OK));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}
