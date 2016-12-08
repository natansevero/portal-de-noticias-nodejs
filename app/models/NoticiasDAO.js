function NoticiasDAO() {

}

NoticiasDAO.prototype.getNoticias = (connection, callback) => {
  connection.query('select * from noticias order by data_criacao desc', callback);
}

NoticiasDAO.prototype.getNoticia = (id_noticia, connection, callback) => {
  console.log(id_noticia.id_noticia);
  connection.query('select * from noticias where id_noticias = ' + id_noticia.id_noticia, callback);
}

NoticiasDAO.prototype.salvarNoticia = (noticia, connection, callback) => {
  connection.query('insert into noticias set ?', noticia, callback);
}

NoticiasDAO.prototype.get5UltimasNoticas = (connection, callback) => {
  connection.query('select * from noticias order by data_criacao desc limit 5', callback);
}

module.exports = () => {
    return NoticiasDAO;
}
