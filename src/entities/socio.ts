import { Column, CreateDateColumn, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import {TipoMembresia} from "./tipo-membresia";
import {SocioPago} from "./socio-pago";


@Entity('socios')
export class Socio {
    @PrimaryGeneratedColumn({name: 'id_socio'})
    idSocio: number;

    @Column({name: 'nombre'})
    nombre: string;

    @Column({name: 'apellido'})
    apellido: string;

    @Column({name: 'dni'})
    dni: string;

    @Column({name: 'correo'})
    correo: string;

    @Column({name: 'telefono'})
    telefono: string;

    @ManyToOne(() => TipoMembresia, (tipoMembresia) => tipoMembresia.socios)
    @JoinColumn({name: 'tipo_membresia'})
    tipoMembresia: TipoMembresia;

    @CreateDateColumn({name: 'fecha_creacion_auditoria'})
    fechaCreacionAuditoria: Date;

    @Column({name: 'estado_auditoria'})
    estadoAuditoria: string;

    @OneToMany(()=>SocioPago,(socioPago)=>socioPago.socio)
    sociospago: SocioPago[];
    
}

