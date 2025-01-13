import { Request, Response } from "express";
import { BaseResponse } from "../shared/base-response";
import * as instalacionesService from "../services/instalacion.service";
import { Instalacion } from "../entities/instalacion";
import { Message } from "../enums/message";
import {insertarInstalacionSchema, actualizarInstalacionSchema } from "../validators/instalacion.schema";

export const insertarInstalaciones = async (req: Request, res: Response) => {
    try {
        console.log('insertarInstalacion');
        const {error} = insertarInstalacionSchema.validate(req.body);
        if(error){
            res.status(400).json(BaseResponse.error(error.message, 400));
            return;
        }
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
        const {error} = actualizarInstalacionSchema.validate(req.body);
        if(error){
            res.status(400).json(BaseResponse.error(error.message, 400));
            return;
        }
        const instalacion: Partial<Instalacion> = req.body;
        if(!(await instalacionesService.obtenerInstalaciones(Number(idInstalacion)))){
            res.status(404).json(BaseResponse.error(Message.NOT_FOUND,404));
            return;
        }
        const actualizarInstalaciones: Instalacion = await instalacionesService.actualizarInstalaciones(Number(idInstalacion),instalacion);
        res.json(BaseResponse.success(actualizarInstalaciones, Message.ACTUALIZADO_OK));
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
