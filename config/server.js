var express = require('express'); //Retorna uma funçao, que não é executada
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

var app = express(); //Executando a função que é retornada

//Informar para o express, que o engine de view agora é o ejs (Apontar o EJS para o Express)
app.set('view engine', 'ejs'); //Para mudar propriedades do express, usamos o método .set()

/*
  Como a pasta "Views" foi passada para outra pastas e por default o ejs caça uma pasta "views" na raiz do projeto
  então temos que dizer (apontar) o novo caminho da pasta "views"

  Vamos setar a propriedade "views" do express

  Temos que passar o caminho a partir de onde o modulo esta sendo utilizado, no nosso caso app.js
*/
app.set('views', './app/views');

/*
  Temos que mapear nossos arquios de assets como imagens, scripts e arquivos de estilo.
  Usamos então uma função do Express que é a static(), que funciona como um MIDDLEWARE.
  A função vai identificar um diretorio com informações estaticas e vai permitir que esses
  arquivos sejam acessados.
  Vai tbm pemiritr o acesso destes arquivos a partir da raiz, no nosso caso, a partir do dir "public"
*/
app.use(express.static('./app/public'));

/*
  Vamos incluir o body-parser no express
  Um detalhe: O body-parser ele funciona como um MIDDLEWARE, ele vai atuar nos objetos de
  request e response.

  Como ele é um MIDDLEWARE, temos que parametrizar como ele vai tratar nossos forms.
*/
app.use(bodyParser.urlencoded({ extended: true }));

/*
  Inluindo o Express-Validator na aplicação (Ele é um MIDDLEWARE)
  Já executando a function que o modulo exporta para nós
*/
app.use(expressValidator());

/*
  Precisamos é dizer para o consign entender o diretorio "routes", e jogar essa informação
  para a instancia do express. É interressante fazer isso depois da chamada do express.
  O .into() faz incluir todos os modulos da aplicação no nosso servidor "app" já dando
  os requires necessecarios.
  A pesquisa de diretorio é feita a partir do arquivo app.js

  Com o .then, posso incluir outros modulos na aplicação. Pode ser controllers, pode ser o config
  Se passarmos só o /config, ele vai carregar o server.js, e vai entrar em um loop de create de Servers
  Então, podemos que passar o modulo espefico passando com sua extensão
*/
consign()
  .include('app/routes')
  .then('config/dbConnection.js')
  .then('app/models')
  .then('app/controllers')
  .into(app);

module.exports = app;
