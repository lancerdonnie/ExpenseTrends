import mysql from 'mysql2';

let db;

const createConn = () => {
  const DB = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  });

  DB.connect((err) => {
    if (err) {
      console.error(err);
      process.exitCode = 1;
    }
    db = DB;
    console.log('Connection established');
  });
};

export { createConn, db };
