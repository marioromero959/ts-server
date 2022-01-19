import { DataTypes } from "sequelize";
import db from "../db/connection";

const Usuario = db.define('usuario',{ //usuario es el nombre de la tabla en mysql
    nombre:{
        type: DataTypes.STRING,
    },
    email:{
        type: DataTypes.STRING,
    },
    estado:{
        type: DataTypes.BOOLEAN,
    },
})

export default Usuario;