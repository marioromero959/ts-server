import express,{ Application }  from "express";
import userRoutes from '../routes/usuario'
import cors from 'cors'
import db from "../db/connection";

class Server {

    private app:Application;
    private port:string;
    private paths = {
        usuarios:'/api/usuarios'
    }

    constructor(){
        this.app = express();
        this.port = process.env.PORT || '8080';
        this.conectarBD();
        this.middlewares();
        this.routes();
    }

     async conectarBD(){
         try {
            db.authenticate();
            console.log('Database online');
         } catch (error) {
            throw new Error('Error  de coneccion');
         }
     }

    middlewares(){
        //CORS
        this.app.use(cors())
        //Parseo body
        this.app.use(express.json())
        //Carpeta publica
        this.app.use( express.static('public'))
    }

    routes(){
        this.app.use(this.paths.usuarios,userRoutes)
    }

    listen(){
        this.app.listen(this.port,()=>{
            console.log('Servidor corriendo en puerto '+ this.port);
        })
    }
}
export default Server