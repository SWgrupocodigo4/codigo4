import { AppDataSource } from "../config/db.config";
import { Instalacion } from "../entities/instalaciones";
import { EstadoAuditoria } from "../enums/estado-auditoria";

const repository = AppDataSource.getRepository(Instalacion);

export const insertarInstalaciones = async (data: Partial<Instalacion>): Promise<Instalacion> => {
    const newInstalacion: Instalacion = await repository.save(data);
    return await repository.findOne({ where: { idInstalacion: newInstalacion.idInstalacion } });
};

export const listarInstalaciones = async (): Promise<Instalacion[]> => {
    return await repository.find({
        where: { estadoAuditoria: EstadoAuditoria.ACTIVO }
    });
};

export const obtenerInstalaciones = async (idInstalacion: number): Promise<Instalacion> => {
    return await repository.findOne({ where: { idInstalacion, estadoAuditoria: EstadoAuditoria.ACTIVO } });
};

export const actualizarInstalaciones = async (idInstalacion: number, data: Partial<Instalacion>): Promise<Instalacion> => {
    await repository.update(idInstalacion, data);
    return obtenerInstalaciones(idInstalacion);
};

export const darBajaInstalaciones = async (idInstalacion: number): Promise<void> => {
    await repository.update(idInstalacion, { estadoAuditoria: EstadoAuditoria.INACTIVO });
};  