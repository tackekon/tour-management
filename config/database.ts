import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize(
  process.env.DATABASE_NAME, // tên database
  process.env.DATABASE_USERNAME, // user
  process.env.DATABASE_PASSWORD, // password
  {
    host: process.env.DATABASE_HOST, // link hosting
    dialect: 'mysql'
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established succesfully!');
  })
  .catch((error) => {
    console.error('Connect error: ', error);
  });

  export default sequelize;