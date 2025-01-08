import { DataSource } from "typeorm";
import { Pago } from "../entities/pago";
import { TipoMembresia } from "../entities/tipo-membresia";
import { Instalacion } from "../entities/instalacion";
import {Socio} from "../entities/socio";
import { SocioPago } from "../entities/socio-pago";
import {Rol} from "../entities/rol";
import { Usuario } from "../entities/usuario";
import {TipoActividad} from "../entities/tipo-actividad";
import {Actividad} from "../entities/actividad";

import { DB_DATABASE, DB_HOST, DB_PASSWORD, DB_PORT, DB_TYPE, DB_USERNAME } from "../shared/constants";

export const AppDataSource = new DataSource({
    type: DB_TYPE as any,
    host: DB_HOST,
    port: Number(DB_PORT||'0'),
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    entities: [Pago, TipoMembresia,Instalacion, Socio, SocioPago, Rol, Usuario, TipoActividad, Actividad],
}); 