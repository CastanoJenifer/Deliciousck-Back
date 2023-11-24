const pgp = require('pg-promise')();
require('dotenv').config();
const fs = require('fs');
const path = require('path');

const dbHost = process.env.HOST;
const dbUser = process.env.USER;
const dbPassword = process.env.PASSWORD;



// Implementar la conexión a la base de datos deliciousck
const db = pgp({
    user: dbUser,
    host: dbHost,
    database: 'Deliciousck',
    password: dbPassword,
    ssl: {
      rejectUnauthorized: true,
      ca: fs.readFileSync(path.join(__dirname, '..', 'certs', 'DigiCertGlobalRootCA.crt.pem')).toString()
    },
    port: 5432,
  });

// Aquí puedes escribir el código para establecer la conexión a la base de datos y realizar operaciones

// Exportar la configuración de la base de datos
module.exports = dbConfig;
