module.exports.index = (app, req, res) => {

  var connection = app.config.dbConnection();
  var noticiasModel = new app.app.models.NoticiasDAO;

  noticiasModel.get5UltimasNoticas(connection, (error, result) => {
    res.render("home/index", {noticias: result});
  });
}
