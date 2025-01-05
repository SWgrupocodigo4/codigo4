import { AppDataSource } from "../config/db.config";
import { TipoMembresia } from "../entities/tipo-membresia";
import { EstadoAuditoria } from "../enums/estado-auditoria";

const repository = AppDataSource.getRepository(TipoMembresia);

export const insertarTipoMembresia = async (data: Partial<TipoMembresia>): Promise<TipoMembresia> => {
    const newTipoMembresia: TipoMembresia = await repository.save(data);
    return await repository.findOne({ where: { idTipoMembresia: newTipoMembresia.idTipoMembresia } });
}

export const listarTiposMembresia = async (): Promise<TipoMembresia[]> => {
    return await repository.find({
        where: { estadoAuditoria: EstadoAuditoria.ACTIVO }
    });
}

export const obtenerTipoMembresia = async (idTipoMembresia: number): Promise<TipoMembresia> => {
    return await repository.findOne({ where: { idTipoMembresia, estadoAuditoria: EstadoAuditoria.ACTIVO } });
}

export const actualizarTipoMembresia = async (idTipoMembresia: number, data: Partial<TipoMembresia>): Promise<TipoMembresia> => {
    await repository.update(idTipoMembresia, data);
    return obtenerTipoMembresia(idTipoMembresia);
}

export const darBajaTipoMembresia = async (idTipoMembresia: number): Promise<void> => {
    await repository.update(idTipoMembresia, { estadoAuditoria: EstadoAuditoria.INACTIVO });
}