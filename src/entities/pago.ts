import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('pagos')
export class Pago {
    @PrimaryGeneratedColumn({name: 'id_pago'})
    idPago: number;

    @Column({name: 'nombre_concepto'})
    nombreConcepto: string;

    @Column({name: 'descripcion'})
    descripcion: string;

    @Column({name: 'monto'})
    monto: number;

    @CreateDateColumn({name: 'fecha_creacion_auditoria'})
    fechaCreacionAuditoria: Date;

    @Column({name: 'estado_auditoria'})
    estadoAuditoria: string;
}

