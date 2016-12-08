//Export de Atributos
module.exports.formulario_inclusao_noticia = (app, req, res) => {
  //OBS.: O parametro passado para não dá conflito caso haja um erro na validação no post abaixo
  res.render("admin/form_add_noticia", {validacao: {}, noticia: {}});
}

module.exports.noticias_salvar = (app, req, res) => {
  var noticia = req.body;

  /*
    Passamos dois parametros. 'O name do input (Campo)' e 'E uma msg do pq daquela informação não foi validada'
  */
  req.assert('titulo','Titulo é obrigatório').notEmpty();
  req.assert('resumo','Resumo é obrigatório').notEmpty();
  req.assert('resumo','Resumo deve conter entra 10 e 100 chars').len(10, 100);
  req.assert('autor','Autor é obrigatório').notEmpty();
  req.assert('data_noticia','Data é obrigatório').notEmpty().isDate({format: 'YYYY-MM-DD'});
  req.assert('noticia','Noticia é obrigatório').notEmpty();

  //Caso, algum dado seja invalido, um prop dentro do req, vai receber true. validationErrors
  var erros = req.validationErrors();

  //console.log(erros);
  console.log(noticia);
  if(erros) {
    res.render("admin/form_add_noticia", {validacao : erros, noticia: noticia});
    return;
  }

  var connection = app.config.dbConnection();
  var noticiasModel = new app.app.models.NoticiasDAO;

  noticiasModel.salvarNoticia(noticia, connection, (error, result) => {
    res.redirect('/noticias');
  })
}
