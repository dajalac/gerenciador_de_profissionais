/**
 * Arquivo: backend\scr\config\dbConnection.js
 * Descrição: arquivo responável pela conexão com o PostgresSQL database
 * Data: 06/30/2021
 * Autora: Danielle Ajala
 */

const knex = require('knex');


const db = knex({
    client: 'pg',
    connection: {
      host : '127.0.0.1', // indica one a db esta localizada. Atualmente esta no meu computador somente.  
      user : 'postgres', 
      password : ' ',
      database : 'gerenciador_profissionais'
    }
  });

module.exports = db;