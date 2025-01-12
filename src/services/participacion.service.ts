import {AppDataSource} from "../config/db.config";
import {Participacion} from "../entities/participacion";
import {EstadoAuditoria} from "../enums/estado-auditoria";

const repository = AppDataSource.getRepository(Participacion);

export const insertarParticipacion = async (data: Partial<Participacion>): Promise<Participacion> => {
    const newParticipacion: Participacion = await repository.save(data);
    return await repository.findOne({where: {idParticipacion: newParticipacion.idParticipacion}});
}

export const listarParticipaciones = async (): Promise<Participacion[]> => {
    return await repository.find({
        where: {estadoAuditoria: EstadoAuditoria.ACTIVO},
        relations: ['actividad', 'socio']
    });
}

export const obtenerParticipacion = async (idParticipacion: number): Promise<Participacion> => {
    return await repository.findOne({where: {idParticipacion, estadoAuditoria: EstadoAuditoria.ACTIVO}});
}

export const actualizarParticipacion = async (idParticipacion: number, data: Partial<Participacion>): Promise<Participacion> => {
    await repository.update(idParticipacion, data);
    return obtenerParticipacion(idParticipacion);
}

export const darBajaParticipacion = async (idParticipacion: number): Promise<void> => {
    await repository.update(idParticipacion, {estadoAuditoria: EstadoAuditoria.INACTIVO});
}

