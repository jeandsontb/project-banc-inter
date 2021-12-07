<h1 align="center">
   --- API RESTFUL APLICAÇÃO BANCO INTER ---
</h1>

<p align="center" style="display: flex; align-items: flex-start; justify-content: center;">
  <img alt="api" title="#api" src="https://raw.githubusercontent.com/jeandsontb/project-banc-inter/main/backend-app/assets/inter00.png" width="400px">
  <img alt="api" title="#api" src="https://raw.githubusercontent.com/jeandsontb/project-banc-inter/main/backend-app/assets/inter01.png" width="400px">
</p>

<p align="center">
  <img alt="Repository size" src="https://img.shields.io/static/v1?label=Last%20commit&message=December&color=yellowgreen&style=for-the-badge&logo=Slack">
</p>

## 💻 Sobre o Projeto

Esta api se trata de um projeto bootcamp ofertado pelo banco Inter junto com a plataforma Digital Inovation, com ela é possível cadastrar usuários, realizar o login, assim como também fazer transações de valores, transferências via chave pix gerada pela API. Postgres é o banco de dados utilizado para esse projeto.

## 💡 Como executar o projeto

```bash

  # Clonar o repositório do projeto backend-app

  # Acessar a pasta do projeto

  # Rodar npm install ou yarn

  # Rodar o comando para subir a base de dados para o seu docker -> docker-compose up 

  # Rodar npm run dev ou yarn dev

```

## 💡 Informações das rotas

  # Rota padrão - http://localhost:3333

  # User
    * /user/signup -> Cria um usuário no banco de dados
    * /user/signin -> Exibe o token para esse usuário ao logar
    * /user/me -> Exige usuário logado passando o token

  # Pix
    * /pix/transactions -> Mostra as transações
    * /pix/request -> Mostra a chave pix para transferência
    * /pix/pay/:id     ==> :id -> É a chave pix para realizar uma transferência


## 🛠 Tecnologias

As seguintes ferramentas estão sendo usadas na construção da API:

- [Node.js][nodejs]
- [Express][express]
- [TypeScript][typescript]
- [Docker][docker]
- [TypeOrm][typeorm]
- [JsonWebToken][jsonwebtoken]
- [Nodemon][nodemon]
- [Crypto-JS][cryptojs]
- [express-async-erros][expresserrors]
- [Vscode][vscode]

Feito por Jeandson Tenorio 👋🏽 [Contato!](https://www.linkedin.com/in/jeandson/)

[nodejs]: https://nodejs.org/
[express]: https://expressjs.com/pt-br/
[typescript]: https://www.typescriptlang.org/
[typeorm]: https://typeorm.io/#/
[Joi]: https://joi.dev/api/?v=17.4.2
[docker]: https://docs.docker.com/
[bcrypt]: https://www.npmjs.com/package/bcryptjs
[jsonwebtoken]: https://www.npmjs.com/package/jsonwebtoken
[multer]: https://www.npmjs.com/package/multer
[datefns]: https://date-fns.org/
[ethereal]: https://ethereal.email/
[handlebars]: https://handlebarsjs.com/
[Vscode]: https://code.visualstudio.com/
[nodemon]: https://www.npmjs.com/package/nodemon
[cryptojs]: https://www.npmjs.com/package/crypto-js
[expresserrors]: https://www.npmjs.com/package/express-async-errors