var app = require('./config/server');

//Como precisamos do app no escopo da function do modulo da rota, temos que passar ele por parametro
// var rotaHome = require('./app/routes/home')(app);
// var rotaFormInclusaoNoticia = require('./app/routes/formulario_inclusao_noticia')(app);
// var rotaNoticias = require('./app/routes/noticias')(app);

app.listen(3000, () => {
  console.log("Servidor rodando com Express");
})
