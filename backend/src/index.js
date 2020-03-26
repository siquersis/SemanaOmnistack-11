const express = require("express");
const cors = require("cors");
const routes = require("./routes");

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

/**
 * Rota /Recurso
 */

 /**
  * Métodos HTTP:
  * GET: Buscar uma informação no back-end
  * POST: Criar uma informação no back-end
  * PUT: Alterar uma informação no back-end
  * DELETE: Deletar uma informação no back-end
  */


  /**Tipos de Parâmetros
   * 
   * QUERY PARAMS: Parâmetros nomeados enviados na rota após o "?" (Filtros e Paginação)
   * ROUTE PARAMS: Parâmetros utilizados para identificar recursos
   * REQUEST BODY: Corpo da requisição, utilizado para criar ou alterar recursos
   * 
   */

   /**
    * SQL: MySql, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
    * NoSQL: MongoDB, CouchDB, etc
    */


   /**
    * DRIVER: SELECT * FROM USERS
    * QUERY BUILDER: TABLE('USERS').SELECT('*').WHERE()
    */


