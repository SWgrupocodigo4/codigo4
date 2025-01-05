import { AppDataSource } from "../config/db.config";
import {SocioPago} from "../entities/socio-pago";
import { Socio } from "../entities/socio";
import {Pago} from "../entities/pago";
import { EstadoAuditoria } from "../enums/estado-auditoria";


const repository = AppDataSource.getRepository(SocioPago);

export const insertarSocioPago = async (data: Partial<SocioPago>): Promise<SocioPago> => {
    const newSocioPago: SocioPago = await repository.save(data);
    return await repository.findOne({where: { idSocioPago: newSocioPago.idSocioPago}});
}

export const listarSocioPago = async (): Promise<SocioPago[]> => {
    return await repository.find({where: { estadoAuditoria: EstadoAuditoria.ACTIVO }, relations: ['socio', 'pago']});
}

export const obtenerSocioPago = async (idSocioPago: number): Promise<SocioPago> => {
    return await repository.findOne({where: { idSocioPago, estadoAuditoria: EstadoAuditoria.ACTIVO }, relations: ['socio', 'pago']});
}

export const actualizarSocioPago = async (idSocioPago: number, data: Partial<SocioPago>): Promise<SocioPago> => {
    await repository.update(idSocioPago, data);
    return obtenerSocioPago(idSocioPago);
}

export const darBajaSocioPago = async (idSocioPago: number): Promise<void> => {
    await repository.update(idSocioPago, { estadoAuditoria: EstadoAuditoria.INACTIVO });
}