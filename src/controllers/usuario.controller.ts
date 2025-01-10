import { Request, Response } from "express";
import { BaseResponse } from "../shared/base-response";
import * as usuarioService from "../services/usuario.service";
import { Usuario } from "../entities/usuario";
import { Message } from "../enums/message";

export const insertarUsuario = async (req: Request, res: Response) => {
    try {
        console.log('insertarUsuario');
        const usuario: Partial<Usuario> = req.body;
        const newUsuario: Usuario = await usuarioService.insertarUsuario(usuario);
        res.json(BaseResponse.success(newUsuario, Message.INSERTADO_OK));

    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}

export const listarUsuarios = async (req: Request, res: Response) => {
    try {
        console.log('listarUsuarios');
        const usuarios: Usuario[] = await usuarioService.listarUsuarios();
        res.json(BaseResponse.success(usuarios));

    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}

export const obtenerUsuario = async (req: Request, res: Response) => {
    try {
        const { idUsuario } = req.params;
        const usuario: Usuario = await usuarioService.obtenerUsuario(Number(idUsuario));
        if (!usuario) {
            res.status(404).json(BaseResponse.error(Message.NOT_FOUND, 404));
            return;
        }
        res.json(BaseResponse.success(usuario));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }

}

export const actualizarUsuario = async (req: Request, res: Response) => {
    try {
        const { idUsuario } = req.params;
        const usuario: Partial<Usuario> = req.body;
        if (!(await usuarioService.obtenerUsuario(Number(idUsuario)))) {
            res.status(404).json(BaseResponse.error(Message.NOT_FOUND, 404));
            return;
        }
        const actualizarUsuario: Usuario = await usuarioService.actualizarUsuario(Number(idUsuario), usuario);
        res.json(BaseResponse.success(actualizarUsuario, Message.ACTUALIZADO_OK));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }

}

export const darBajaUsuario = async (req: Request, res: Response) => {
    try {
        const { idUsuario } = req.params;
        if (!(await usuarioService.obtenerUsuario(Number(idUsuario)))) {
            res.status(404).json(BaseResponse.error(Message.NOT_FOUND, 404));
            return;
        }
        await usuarioService.darBajaUsuario(Number(idUsuario));
        res.json(BaseResponse.success(null, Message.ELIMINADO_OK));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}