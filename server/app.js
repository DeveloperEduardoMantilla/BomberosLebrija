import express  from 'express';
import dotenv from 'dotenv';
import cors from "cors";

let app = express();
app.use(express.json());
dotenv.config();
app.use(cors());

let server = JSON.parse(process.env.MY_SERVER);

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // Reemplaza con la URL de tu frontend
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });

app.listen(server,()=>{
    console.log(`http://${server.hostname}:${server.port}`);
})