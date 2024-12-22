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
        console.log('obtenerInstalacion');
        const id = Number(req.params.id);
        const instalacion: Instalacion = await instalacionesService.obtenerInstalaciones(id);
        res.json(BaseResponse.success(instalacion));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}

export const actualizarInstalaciones = async (req: Request, res: Response) => {
    try {
        console.log('actualizarInstalacion');
        const id = Number(req.params.id);
        const instalacion: Partial<Instalacion> = req.body;
        const updatedInstalacion: Instalacion = await instalacionesService.actualizarInstalaciones(id, instalacion);
        res.json(BaseResponse.success(updatedInstalacion, Message.ACTUALIZADO_OK));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}

export const darBajaInstalaciones = async (req: Request, res: Response) => {
    try {
        console.log('darBajaInstalacion');
        const id = Number(req.params.id);
        await instalacionesService.darBajaInstalaciones(id);
        res.json(BaseResponse.success(null, Message.ELIMINADO_OK));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}
