import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import {Socio} from "./socio";

@Entity('tipo_membresia')
export class TipoMembresia {
    @PrimaryGeneratedColumn({ name: 'id_tipo_membresia' })
    idTipoMembresia: number;

    @Column({ name: 'nombre' })
    nombre: string;

    @Column({ name: 'descripcion' })
    descripcion: string;

    @Column({ name: 'nivel_acceso' })
    nivelAcceso: number;

    @Column({ name: 'costo_mensual', type: 'numeric' })
    costoMensual: number;

    @CreateDateColumn({ name: 'fecha_creacion_auditoria' })
    fechaCreacionAuditoria: Date;

    @Column({ name: 'estado_auditoria' })
    estadoAuditoria: string;

    @OneToMany(()=>Socio,(socio)=>socio.tipoMembresia)
    socios: Socio[];
}