import { Column, CreateDateColumn, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Socio } from "./socio";
import {Pago} from "./pago";

@Entity('socio_pagos')
export class SocioPago {
    @PrimaryGeneratedColumn({name: 'id_socio_pago'})
    idSocioPago: number;
    
    @ManyToOne(() => Socio, (socio) => socio.sociospago)
    @JoinColumn({name: 'id_socio'})
    socio: Socio;

    @ManyToOne(() => Pago, (pago) => pago.sociospago)
    @JoinColumn({name: 'id_pago'})
    pago: Pago;


    @CreateDateColumn({name: 'fecha_pago'})
    fechaCreacionAuditoria: Date;

    @Column({name: 'estado_auditoria'})
    estadoAuditoria: string;
}