import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Rol } from "./rol";

@Entity('usuarios')
export class Usuario {
    @PrimaryGeneratedColumn({ name: 'id_usuario' })
    idUsuario: number;

    @Column({ name: 'usuario' })
    usuario: string;

    @Column({ name: 'password' })
    password: string;

    @Column({ name: 'nombre' })
    nombre: string;

    @Column({ name: 'apellido' })
    apellido: string;

    @Column({ name: 'correo' })
    correo: string;

    @CreateDateColumn({ name: 'fecha_creacion_auditoria' })
    fechaCreacionAuditoria: Date;

    @Column({ name: 'estado_auditoria' })
    estadoAuditoria: string;
    
    @ManyToOne(() => Rol, (rol) => rol.usuarios)
    @JoinColumn({ name: 'id_rol' })
    rol: Rol;

}
