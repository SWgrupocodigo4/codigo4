import { Request, Response } from "express"
import { BaseResponse } from "../shared/base-response";
import * as socioService from "../services/socio.service";
import { Socio } from "../entities/socio";
import { TipoMembresia } from '../entities/tipo-membresia';
import { Message } from "../enums/message";

export const insertarSocio = async (req: Request, res: Response) => {
    try {
        console.log('insertarSocio');
        const socio: Partial<Socio> = req.body;
        const newSocio: Socio = await socioService.insertarSocio(socio);
        res.json(BaseResponse.success(newSocio,Message.INSERTADO_OK));

    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}

export const listarSocios = async (req: Request, res: Response) => {
    try {
        console.log('listarSocios');
        const socios: Socio[] = await socioService.listarSocios();
        res.json(BaseResponse.success(socios));

    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}

export const obtenerSocio = async (req: Request, res: Response) => {
    try {
        const { idSocio} = req.params;
        const socio: Socio = await socioService.obtenerSocio(Number(idSocio));
        if(!socio) {
            res.status(404).json(BaseResponse.error(Message.NOT_FOUND,404));
            return;
        }
        res.json(BaseResponse.success(socio));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
     
}

export const actualizarSocio = async (req: Request, res: Response) => {
    try {
        const { idSocio } = req.params;
        const socio: Partial<Socio> = req.body;
        if(!(await socioService.obtenerSocio(Number(idSocio)))){
            res.status(404).json(BaseResponse.error(Message.NOT_FOUND,404));
            return;
        }
        const updatedSocio: Socio = await socioService.actualizarSocio(Number(idSocio),socio);
        res.json(BaseResponse.success(updatedSocio,Message.ACTUALIZADO_OK));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}

export const darBajaSocio = async (req: Request, res: Response) => {
    try {
        const { idSocio } = req.params;
        if(!(await socioService.obtenerSocio(Number(idSocio)))){
            res.status(404).json(BaseResponse.error(Message.NOT_FOUND,404));
            return;
        }
        await socioService.darBajaSocio(Number(idSocio));
        res.json(BaseResponse.success(null,Message.ELIMINADO_OK));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}