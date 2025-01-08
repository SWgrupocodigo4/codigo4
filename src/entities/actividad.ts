import { Column, CreateDateColumn, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import {TipoActividad} from "./tipo-actividad";
import {Instalacion} from "./instalacion";
import {Usuario} from "./usuario";

@Entity('actividades')
export class Actividad {
    @PrimaryGeneratedColumn({name: 'id_actividad'})
    idActividad: number;

    @Column({name: 'nombre'})
    nombre: string;

    @Column({name: 'descripcion'})
    descripcion: string;

    @Column({name: 'fecha_inicio'})
    fechaInicio: Date;

    @Column({name: 'fecha_fin'})
    fechaFin: Date;

    @Column({name: 'nivel_acceso_maximo'})
    nivelAccesoMaximo: number;

    @CreateDateColumn({name: 'fecha_creacion_auditoria'})
    fechaCreacionAuditoria: Date;

    @Column({name: 'estado_auditoria'})
    estadoAuditoria: string;

    @ManyToOne(() => TipoActividad, (tipoActividad) => tipoActividad.actividades)
    @JoinColumn({name: 'id_tipo_actividad'})
    tipoActividad: TipoActividad;

    @ManyToOne(() => Instalacion, (instalacion) => instalacion.actividades)
    @JoinColumn({name: 'id_instalacion'})
    instalacion: Instalacion;

    @ManyToOne(() => Usuario, (usuario) => usuario.actividades)
    @JoinColumn({name: 'id_usuario'})
    usuario: Usuario;


}