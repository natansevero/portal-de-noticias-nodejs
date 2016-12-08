//Para que "app" seja utilizada no scopo  da nossa function, temos que passar ela por parametro
//Temos que receber essa informação para atuar sobre ela
module.exports = (app) => {
  app.get('/', (req, res) => {
    app.app.controllers.home.index(app, req, res);
  });
}
