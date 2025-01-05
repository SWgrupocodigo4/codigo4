import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Usuario } from "./usuario";

@Entity('roles')
export class Rol{
    @PrimaryGeneratedColumn({name: 'id_rol'})
    idRol: number;

    @Column({name: 'descripcion'})
    descripcion: string;

    @CreateDateColumn({name: 'fecha_creacion_auditoria'})
    fechaCreacionAuditoria: Date;

    @Column({name: 'estado_auditoria'})
    estadoAuditoria: string;

    @OneToMany(()=>Usuario,(usuario)=>usuario.rol)
    usuarios: Usuario[];
}