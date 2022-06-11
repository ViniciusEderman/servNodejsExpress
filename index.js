
require('dotenv').config({path: __dirname + '/.env'})
const express = require("express");
const nodemailer = require("nodemailer");
const app = express();
const port = 8000; // porta de acesso ao serv

//rota do serv:
app.post("/sendmail", (req, res) => {
  email
    .sendMail({
      from: "vinicius ederman <vinicius-edermanmc@hotmail.com>",
      to: "arthur.gomes@elife.com.br",
      subject: "Hi, teste do meu serv",
      text: "Hi, tudo bem? Me chamo Vinicius isso é apenas um test",
    })
    .then((message) => {
      res.send(message);
    })
    .catch((err) => {
      res.send({error:'falha',err});
    });
});

//teste de outra rota:
app.get("/olamundo", (req, res) => {
  res.send("<h1>Teste nova rota</h1>");
});

app.listen(port, () => {
  //iniciando o servidor, criação de uma arrow function
  console.log("Servidor funcionando");
});

console.log(process.env.EMAIL);

let email = nodemailer.createTransport({
  host: "smtp-mail.outlook.com",
  secureConnection: false,
  port: 587,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.SENHA,
  },
  tls: {
    ciphers: "SSLv3",
  },
});
