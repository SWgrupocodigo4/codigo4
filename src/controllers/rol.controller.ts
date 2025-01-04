import { Request, Response } from 'express';
import { BaseResponse } from '../shared/base-response';
import * as rolService from '../services/rol.service';
import { Rol } from '../entities/rol';
import { Message } from '../enums/message';

export const insertarRol = async (req: Request, res: Response) => {
    try {
        console.log('insertarRol');
        const rol: Partial<Rol> = req.body;
        const newRol: Rol = await rolService.insertarRol(rol);
        res.json(BaseResponse.success(newRol, Message.INSERTADO_OK));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}

export const listarRoles = async (req: Request, res: Response) => {
    try {
        console.log('listarRoles');
        const roles: Rol[] = await rolService.listarRoles();
        res.json(BaseResponse.success(roles));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}

export const obtenerRol = async (req: Request, res: Response) => {
    try {
        const { idRol } = req.params;
        const rol: Rol = await rolService.obtenerRol(Number(idRol));
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

export const actualizarRol = async (req: Request, res: Response) => {
    try {

        const { idRol } = req.params;
        const rol: Partial<Rol> = req.body;
        if (!(await rolService.obtenerRol(Number(idRol)))) {
            res.status(404).json(BaseResponse.error(Message.NOT_FOUND, 404));
            return;
        }
        const updateRol: Rol = await rolService.actualizarRol(Number(idRol), rol);
        res.json(BaseResponse.success(updateRol, Message.ACTUALIZADO_OK));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}

export const darBajaRol = async (req: Request, res: Response) => {
    try {
        const { idRol } = req.params;
        if (!(await rolService.obtenerRol(Number(idRol)))) {
            res.status(404).json(BaseResponse.error(Message.NOT_FOUND, 404));
            return;
        }
        await rolService.darBajaRol(Number(idRol));
        res.json(BaseResponse.success(null, Message.ELIMINADO_OK));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}