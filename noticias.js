var http = require('http');

//Criando um servidor (Subindo um servidor)
var server = http.createServer((req, res) => {

  //Prisamos interpretar a request como reponder request com base em uma url
  var categoria = req.url; //Recuperamos do "/" pra frente. Ex.: /moda

  if(categoria == '/tecnologia'){
    res.end("<html><body>Noticias de Tecnologia</body></html>");
  } else if(categoria == '/moda'){
    res.end("<html><body>Noticias de Moda</body></html>");
  } else if(categoria == '/beleza'){
    res.end("<html><body>Noticias de Beleza</body></html>");
  } else {
    //Quando receber a request, definindo nossa resposta
    res.end("<html><body>Portal de Noticias</body></html>");
  }
}).listen(3000);
