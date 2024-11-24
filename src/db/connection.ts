import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(
  process.env.DB_NAME || 'yourdb',
  process.env.DB_USER || 'root',
  process.env.DB_PASSWORD || 'root',
  {
    host: process.env.DB_HOST || 'localhost',
    dialect: 'mysql',
    logging: false, // Opcional: desactivar logs de Sequelize
  }
);

sequelize
  .authenticate()
  .then(() => console.log('Database connected!'))
  .catch((err) => console.error('Error connecting to DB:', err));

export default sequelize;
