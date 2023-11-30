import express  from 'express';
import {limitApi} from '../limits/limit.js';

let appRouter = express();
appRouter.use(limitApi());

appRouter.get('/',(req, res) => {
    res.send({message:`Bienvenidos a la api de Bomberos de Lebrija`});
})
export default appRouter;
