import { Request, Response } from "express";
import { BaseResponse } from "../shared/base-response";
import * as rolService from "../services/rol.service";
import { Rol } from "../entities/rol";
import { Message } from "../enums/message";

export const insertarRoles = async (req: Request, res: Response) => {
    try {
        const rol: Partial<Rol> = req.body;
        const newRol: Rol = await rolService.insertarRoles(rol);
        res.json(BaseResponse.success(newRol, Message.INSERTADO_OK));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}

export const listarRoles = async (req: Request, res: Response) => {
    try {
        const roles: Rol[] = await rolService.listarRoles();
        res.json(BaseResponse.success(roles));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}

export const obtenerRoles = async (req: Request, res: Response) => {
    try {
        const { idRol } = req.params;
        const rol: Rol = await rolService.obtenerRoles(Number(idRol));
        if (!rol) {
            res.status(404).json(BaseResponse.error(Message.NOT_FOUND, 404));
            return;
        }
        res.json(BaseResponse.success(rol));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}

export const actualizarRoles = async (req: Request, res: Response) => {
    try {
        const { idRol } = req.params;
        const rol: Partial<Rol> = req.body;
        if(!(await rolService.obtenerRoles(Number(idRol)))){
            res.status(404).json(BaseResponse.error(Message.NOT_FOUND,404));
            return;
        }
        const actualizarRoles: Rol = await rolService.actualizarRoles(Number(idRol), rol);
        res.json(BaseResponse.success(actualizarRoles, Message.ACTUALIZADO_OK));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}

export const darBajaRoles = async (req: Request, res: Response) => {
    try {
        const { idRol } = req.params;
        if(!(await rolService.obtenerRoles(Number(idRol)))){
            res.status(404).json(BaseResponse.error(Message.NOT_FOUND,404));
            return;
        }
        await rolService.darBajaRoles(Number(idRol));
        res.json(BaseResponse.success(null, Message.ELIMINADO_OK));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}
