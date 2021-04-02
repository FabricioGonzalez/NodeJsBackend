# NodeJsBackend

## Explicações sobre o funcionamento

  <br>
  
  Essa Api funciona da seguinte forma.
  É passdo variaveis de ambiente, via arquivo .env ou linha de comando.
  
  <br>

Na pasta raiz do projeto há um arquivo chamado index.js.
As variaveis de ambiente são:  
PORT: para especificar a porta que o servidor será exposto.

MONGO: para especificar a url de conexão ao bando de dados.

SECRET: para especificar o segredo que será utilizado para gerar os tokens de acesso JWT

<br>

As rotas, todas recebem um token, passado no cabeçalho de cada requisição. Para que aja a autenticação e autorização do acesso.

Há duas rotas que não necessitam de autenticação.

Que é a rota para gerar o cadastro da aplicação no banco de dados.

E a rota de autenticação e autorização do JWT
que gera o token com as informações passadas via corpo da requisição.

<br>

## Explicação sobre decisão a respeito do framework para controle da aplicação

<br>
Escolhi o express por já ter uma boa experiência com ele. Gostei do NestJS mas não quis utilizar ele por ser uma abstração do Express.
Gosto de utilizar coisas menos abstratas, por mais que eu reconheça que o que o NestJS traz é ótimo para projetos que precisam escalar e torna a manutenção mais simples.
Outra coisa que pesou em minha decisão foi o fato do NestJS utilizar massivamente Typescript. E todo o poder dos decorators e outras features.
Quis me manter no Javascript puro. Mostrar o que o nodeJs pode fazer apenas com sua linguagem padrão.
