import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import{Actividad} from "./actividad";

@Entity('instalaciones')
export class Instalacion {
    @PrimaryGeneratedColumn({ name: 'id_instalacion' })
    idInstalacion: number;

    @Column({ name: 'nombre', length: 50 })
    nombre: string;

    @Column({ name: 'descripcion', length: 100 })
    descripcion: string;

    @Column({ name: 'aforo_maximo' })
    aforoMaximo: number;

    @CreateDateColumn({ name: 'fecha_creacion_auditoria' })
    fechaCreacionAuditoria: Date;

    @Column({ name: 'estado_auditoria', type: 'char', length: 1, default: 'A' })
    estadoAuditoria: string;

    @OneToMany(()=>Actividad,(actividad)=>actividad.instalacion)
    actividades: Actividad[];
}