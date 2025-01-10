import { AppDataSource } from "../config/db.config";
import {Actividad} from "../entities/actividad";
import {EstadoAuditoria} from "../enums/estado-auditoria";

const repository = AppDataSource.getRepository(Actividad);

export const insertarActividad = async (data: Partial<Actividad>): Promise<Actividad> => {
    const newActividad: Actividad = await repository.save(data);
    return await repository.findOne({where: {idActividad: newActividad.idActividad}})
}

export const listarActividades = async (): Promise<Actividad[]> => {
    return await repository.find({
        where: { estadoAuditoria: EstadoAuditoria.ACTIVO },
        relations: ['tipoActividad', 'instalacion', 'usuario']
    });
}

export const obtenerActividad = async (idActividad: number): Promise<Actividad> => {
    return await repository.findOne({ where: { idActividad, estadoAuditoria: EstadoAuditoria.ACTIVO }, relations: ['tipoActividad', 'instalacion', 'usuario'] });
}

export const actualizarActividad = async (idActividad: number, data: Partial<Actividad>): Promise<Actividad> => {
    await repository.update(idActividad, data);
    return obtenerActividad(idActividad);
}

export const darBajaActividad = async (idActividad: number): Promise<void> => {
    await repository.update(idActividad, { estadoAuditoria: EstadoAuditoria.INACTIVO });
}

