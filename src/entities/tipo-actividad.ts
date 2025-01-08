import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import {Actividad} from "./actividad";

@Entity('tipo_actividad')
export class TipoActividad {
    @PrimaryGeneratedColumn({ name: 'id_tipo_actividad' })
    idTipoActividad: number;

    @Column({ name: 'nombre' })
    nombre: string;

    @Column({ name: 'descripcion' })
    descripcion: string;

    @CreateDateColumn({ name: 'fecha_creacion_auditoria' })
    fechaCreacionAuditoria: Date;

    @Column({ name: 'estado_auditoria' })
    estadoAuditoria: string;
    
    @OneToMany(()=>Actividad,(actividad)=>actividad.tipoActividad)
    actividades: Actividad[];

}