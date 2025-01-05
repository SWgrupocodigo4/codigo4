import { AppDataSource } from "../config/db.config";
import { Pago } from "../entities/pago";
import { EstadoAuditoria } from "../enums/estado-auditoria";

const repository = AppDataSource.getRepository(Pago);

export const insertarPago = async (data: Partial<Pago>): Promise<Pago> => {
    const newPago: Pago = await repository.save(data);
    return await repository.findOne({where: { idPago: newPago.idPago}});
}

export const listarPago = async (): Promise<Pago[]> => {
    return await repository.find({where: { estadoAuditoria: EstadoAuditoria.ACTIVO }});
}

export const obtenerPago = async (idPago: number): Promise<Pago> => {
    return await repository.findOne({where: { idPago, estadoAuditoria: EstadoAuditoria.ACTIVO }});
}

export const actualizarPago = async (idPago: number, data: Partial<Pago>): Promise<Pago> => {
   await repository.update(idPago,data);
   return obtenerPago(idPago);
}

export const darBajaPago = async (idPago: number): Promise<void> => {
    await repository.update(idPago,{estadoAuditoria: EstadoAuditoria.INACTIVO});
}