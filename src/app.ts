import express, { Application, Request, Response } from "express";
import morgan from "morgan";
import pagoRouter from './routes/pago.route'
import tipoMembresiaRouter from './routes/tipo-membresia.route';
import instalacionesRouter from './routes/instalaciones.route'; 
import socioRouter from './routes/socio.route';
import { AppDataSource } from "./config/db.config";

const app: Application = express();

app.use(express.json());
app.use(morgan('dev'));
app.use('/api/v1/pagos',pagoRouter);
app.use('/api/v1/tipo-membresia', tipoMembresiaRouter);
app.use('/api/v1/instalaciones', instalacionesRouter);
app.use('/api/v1/socios', socioRouter);


export const startServer = async () => {
    try {
        await AppDataSource.initialize();
        console.log('La base de datos se ha conectado correctamente');
    } catch (error) {
        console.error('Error al conectar con la base de datos',error);
    }
}

export default app;