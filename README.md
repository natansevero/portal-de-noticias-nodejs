# Portal de Notícias - NodeJS

## Descrição
Aplicação fruto de meus estudos e desenvolvida inteiramente com NodeJS (https://nodejs.org/en/)

## Requisitos
É necessário ter instalado em sua máquina:

* NodeJS (>6.9.2)
* O NPM já vem incluso na instalação do NodeJS
* MySQL (Download e Instalação: http://dev.mysql.com/downloads/)

## Tecnologias
A aplicação faz uso das seguintes dependências:

* ExpressJS
* Body Parser
* Express Validator
* Consign
* EJS
* MySQL

## Uso do banco de dados MySQL
Você precisa ter instalado em sua máquina o banco de dados MySQL. Para fazer o download e instalação, basta acessar este link (http://dev.mysql.com/downloads/) e caçar sua preferência.

Com o MySQL instalado, crie o banco "portal_noticias" e a tabela "noticias":
```
  >> create database portal_noticias;
  >> use portal_noticias;
  >> create table noticias (
      id_noticias int primary key auto_increment,
      titulo varchar(100),
      noticia text,
      data_criacao timestamp default current_timestamp,
      resumo varchar(100),
      autor varchar(30),
      data_noticia date
    );
```

OBS.: Lembre-se de ir no arquivo config/dbConnection.js e mudar a propriedade "password" do método "createConnection" e colocar a senha que você definiu para o seu banco de dados.

## Rodando a aplicação
1: Clone o repositório:
```
  git clone https://github.com/natansevero/portal-de-noticias-nodejs
```
2: Acesse o projeto:
```
  cd portal-de-noticias-nodejs
```
3: Instale as dependências:
```
  npm install
```
4: Rode a aplicação em localhost:
```
  node app.js
```
5: Em seu navegador, digite o seguinte link:
  http://localhost:3000

## Dicas
Para cadastrar uma nova notícia, acesse diretamente o link:
  http://localhost:3000/formulario_inclusao_noticia
