var mysql = require('mysql');

/*
  Com o uso do consign, toda vez que iniciarmos a aplicação, nós iremos estabelecer uma conexçaõ
  com o banco, mesmo que não estejamos usando ele, isso acontece pois nós retornamos o método de connection.
  Podemos resolver isso, usanso o método raper, que vai "embrulhar" o método de connection e vamos
  retornar uma variavel que contenha essa funçãio (metodo de connection).
  Então o exports vai ser de uma variavel e não de um método, e essa variavel contem uma função.
  Dentro da nossa aplicação, a gente executa essa função quando acharmos melhor.
*/
var connMySQL = () => {
  console.log('Conexão estabelecida!');
  return mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '12345',
    database: 'portal_noticias'
  });
}

module.exports = () => {
  console.log('O autoload carregou o modulo de conexão com o DB');
  return connMySQL;
}
