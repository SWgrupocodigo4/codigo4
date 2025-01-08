import { AppDataSource } from "../config/db.config";
import { TipoActividad } from "../entities/tipo-actividad";
import { EstadoAuditoria } from "../enums/estado-auditoria";

const repository = AppDataSource.getRepository(TipoActividad);

export const insertarTipoActividad = async (data: Partial<TipoActividad>): Promise<TipoActividad> => {
    const newTipoActividad: TipoActividad = await repository.save(data);
    return await repository.findOne({ where: { idTipoActividad: newTipoActividad.idTipoActividad } });
}

export const listarTiposActividad = async (): Promise<TipoActividad[]> => {
    return await repository.find({
        where: { estadoAuditoria: EstadoAuditoria.ACTIVO }
    });
}

export const obtenerTipoActividad = async (idTipoActividad: number): Promise<TipoActividad> => {
    return await repository.findOne({ where: { idTipoActividad, estadoAuditoria: EstadoAuditoria.ACTIVO } });
}

export const actualizarTipoActividad = async (idTipoActividad: number, data: Partial<TipoActividad>): Promise<TipoActividad> => {
    await repository.update(idTipoActividad, data);
    return obtenerTipoActividad(idTipoActividad);
}

export const darBajaTipoActividad = async (idTipoActividad: number): Promise<void> => {
    await repository.update(idTipoActividad, { estadoAuditoria: EstadoAuditoria.INACTIVO });
}

