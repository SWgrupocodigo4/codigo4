import { AppDataSource } from "../config/db.config";
import { Rol } from "../entities/rol";
import { EstadoAuditoria } from "../enums/estado-auditoria";

const repository = AppDataSource.getRepository(Rol);

export const insertarRol = async (data: Partial<Rol>): Promise<Rol> => {
    const newRol: Rol = await repository.save(data);
    return await repository.findOne({ where: { id_rol: newRol.id_rol } });
};

export const listarRoles = async (): Promise<Rol[]> => {
    return await repository.find({
        where: { estadoAuditoria: EstadoAuditoria.ACTIVO }
    });
};

export const obtenerRol = async (id_rol: number): Promise<Rol> => {
    return await repository.findOne({ where: { id_rol, estadoAuditoria: EstadoAuditoria.ACTIVO } });
}

export const actualizarRol = async (id_rol: number, data: Partial<Rol>): Promise<Rol> => {
    await repository.update(id_rol, data);
    return obtenerRol(id_rol);
}

export const darBajaRol = async (id_rol: number): Promise<void> => {
    await repository.update(id_rol, { estadoAuditoria: EstadoAuditoria.INACTIVO });
}