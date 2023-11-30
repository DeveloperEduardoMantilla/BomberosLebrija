import express  from 'express';

let appRouter = express();

appRouter.get('/',(req, res) => {
    res.send({message:`Bienvenidos a la api de Bomberos de Lebrija`});
})
export default appRouter;
