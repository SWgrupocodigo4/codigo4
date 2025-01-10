import express, { Application } from "express";
import morgan from "morgan";
import pagoRouter from './routes/pago.route'
import tipoMembresiaRouter from './routes/tipo-membresia.route';
import instalacionesRouter from './routes/instalacion.route'; 
import socioRouter from './routes/socio.route';
import sociopagoRouter from './routes/socio-pago.route';
import rolRouter from './routes/rol.route';
import usuarioRouter from './routes/usuario.route';
import tipoActividadRouter from './routes/tipo-actividad.route';
import actividadRouter from './routes/actividad.route';
import participacionRouter from './routes/participacion.route';
import { AppDataSource } from "./config/db.config";


const app: Application = express();

app.use(express.json());
app.use(morgan('dev'));
app.use('/api/v1/pagos',pagoRouter);
app.use('/api/v1/tipo-membresia', tipoMembresiaRouter);
app.use('/api/v1/instalaciones', instalacionesRouter);
app.use('/api/v1/socios', socioRouter);
app.use('/api/v1/socios-pagos', sociopagoRouter);
app.use('/api/v1/roles', rolRouter);
app.use('/api/v1/usuarios', usuarioRouter);
app.use('/api/v1/tipo-actividades', tipoActividadRouter);
app.use('/api/v1/actividades', actividadRouter);
app.use('/api/v1/participaciones', participacionRouter);



export const startServer = async () => {
    try {
        await AppDataSource.initialize();
        console.log('La base de datos se ha conectado correctamente');
    } catch (error) {
        console.error('Error al conectar con la base de datos',error);
    }
}

export default app;