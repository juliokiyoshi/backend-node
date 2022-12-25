import express from 'express';
import rotas from './routes/index';
import 'reflect-metadata';
import cors from 'cors';


const app = express();



app.use(cors());
app.use(express.json());
app.use(rotas)
app.listen(3000, () => console.log('server started'));
