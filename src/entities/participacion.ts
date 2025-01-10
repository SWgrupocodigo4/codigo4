import {Socio} from './socio';
import {Actividad} from './actividad';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('participaciones')
export class Participacion{
    @PrimaryGeneratedColumn({name: 'id_participacion'})
    idParticipacion: number;

    @ManyToOne(() => Socio, socio => socio.participaciones)
    @JoinColumn({name: 'id_socio'})
    socio: Socio;

    @ManyToOne(() => Actividad, actividad => actividad.participaciones)
    @JoinColumn({name: 'id_actividad'})
    actividad: Actividad;

    @Column({name: 'fecha_creacion_auditoria'})
    fechaCreacionAuditoria: Date;
    
    @Column({name: 'estado_auditoria'})
    estadoAuditoria: string;
    
}
