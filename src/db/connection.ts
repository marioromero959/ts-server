import { Sequelize } from 'sequelize'

const db = new Sequelize('prueba','root','',{ //prueba es el nombre de mi bd de mysql
    host:'localhost',//O direccion http
    dialect:'mysql'
})

export default db;