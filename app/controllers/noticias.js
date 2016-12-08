module.exports.noticias = (app, req, res) =>{
  /*
    Como o consign está jogando as informações pra dentro do app, então podemos usar
    o método de connection a partir do app que está sendo passado por parametro
  */
  var connection = app.config.dbConnection();

  var noticiasModel = new app.app.models.NoticiasDAO;

  noticiasModel.getNoticias(connection, (error, result) => {
    res.render("noticias/noticias", {noticias: result});
  });
}

module.exports.noticia = (app, req, res) => {
  var connection = app.config.dbConnection();

  var noticiasModel = new app.app.models.NoticiasDAO;

  var id_noticia = req.query;

  noticiasModel.getNoticia(id_noticia, connection, (error, result) => {
    res.render('noticias/noticia', {noticia: result});
  });
}
