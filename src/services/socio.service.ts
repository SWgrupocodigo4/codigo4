import { AppDataSource } from "../config/db.config";
import { Socio } from "../entities/socio";
import { TipoMembresia } from "../entities/tipo-membresia"; 
import { EstadoAuditoria } from "../enums/estado-auditoria";

const repository = AppDataSource.getRepository(Socio);

export const insertarSocio = async (data: Partial<Socio>): Promise<Socio> => {
    const newSocio: Socio = await repository.save(data);
    return await repository.findOne({where: {idSocio: newSocio.idSocio}})
}


export const listarSocios = async (): Promise<Socio[]> => {
    return await repository.find({
        where: { estadoAuditoria: EstadoAuditoria.ACTIVO },
        relations: ['tipoMembresia']
    });
}



export const obtenerSocio = async (idSocio: number): Promise<Socio> => {
    return await repository.findOne({ where: { idSocio, estadoAuditoria: EstadoAuditoria.ACTIVO }, relations: ['tipoMembresia'] });
}

/*export const actualizarSocio = async (idSocio: number, data: Partial<Socio>): Promise<Socio> => {
    await repository.update(idSocio, data);
    return obtenerSocio(idSocio);
}

export const darBajaSocio = async (idSocio: number): Promise<void> => {
    await repository.update(idSocio, { estadoAuditoria: EstadoAuditoria.INACTIVO });
}*/
