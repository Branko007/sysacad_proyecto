import express from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';


const app = express();

// Middlewares base
app.use(express.json());
app.use(cookieParser());
app.use(morgan('dev'));

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('Sysacad en funcionamiento ✅');
});


export default app;
