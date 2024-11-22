"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const usuario_1 = __importDefault(require("../routes/usuario"));
const cors_1 = __importDefault(require("cors"));
class Server {
    constructor() {
        this.paths = {
            usuarios: '/api/usuarios'
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '8080';
        // this.conectarBD();
        this.middlewares();
        this.routes();
    }
    // async conectarBD(){
    //     try {
    //         db.authenticate();
    //         console.log('Database online');
    //     } catch (error) {
    //         throw new Error('Error  de coneccion');
    //     }
    // }
    middlewares() {
        //CORS
        this.app.use((0, cors_1.default)());
        //Parseo body
        this.app.use(express_1.default.json());
        //Carpeta publica
        this.app.use(express_1.default.static('public'));
    }
    routes() {
        this.app.use(this.paths.usuarios, usuario_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto ' + this.port);
        });
    }
}
exports.default = Server;
