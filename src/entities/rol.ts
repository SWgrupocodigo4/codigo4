import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("roles")
export class Rol{
    @PrimaryGeneratedColumn({name: "id_rol"})
    id_rol: number;

    @Column({name: 'descripcion'})
    descripcion: string;
    
    @Column({name: 'fecha_creacion_auditoria'})
    fechaCreacionAuditoria: Date;

    @Column({ name: 'estado_auditoria', type: 'char', length: 1, default: 'A' })
    estadoAuditoria: string;
}