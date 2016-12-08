//var dbConnection = require('../../config/dbConnection');

//Para que "app" seja utilizada no scopo  da nossa function, temos que passar ela por parametro
//Temos que receber essa informação para atuar sobre ela
module.exports = (app) => {
  app.get('/noticias', (req, res) => {
    app.app.controllers.noticias.noticias(app, req, res);
  });

  app.get('/noticia', (req, res) => {
    app.app.controllers.noticias.noticia(app, req, res);
  });
}
