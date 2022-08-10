## Descrição

Api desenvolvida em NodeJs.

## Decisão da arquitetura utilizada

Neste projeto a ideia era separar as responsabilidades.
Na pasta src temos algumas estruturas de pastas.
- controllers: Nesta pasta há um controlador para os alunos, cuja responsabilidade é entregar as requisições da api;
- models: Nesta pasta há os modelos de dados da tabela de estudantes;
- routes: Contém as rotas de chamadas para a api;
- services: Nesta pasta há os serviços responsáveis pela regra de negócio e retorno das requisições pela api, que são chamadas pelos controladores;
- validations: Esta camada é responsável pelas validações das requisições de salvar ou atualizar um aluno.

Na raiz da pasta src, há dois arquivos o app.js, importante arquivo que inclui as rotas, e o arquivo factories, importante arquivo para os testes responsável por criar dados falsos para testar.

Utilizando o pacote sequelize estruturamos uma migration para criar nossas tabelas utilizando o comando npx sequelize db:migrate, a migração fica dentro da pasta migrations.
Na pasta seeders, temos um seeder com dados pré criados para nosso banco utilizando o comando npx sequelize-cli db:seed:all.

Na pasta config, os arquivos db.js, arquivo base que contém as informações de nosso banco de dados tais como usuário, nome do banco, senha de banco, tipo de banco de dados, e o arquivo config.js, arquivo de configurações do banco de dados gerada automática pelo nosso sequelize, importado pelo arquivo na raiz do projeto .sequelizerc.

Temos um arquivo .env, temos nossas variáveis de ambientes utilizadas pela api e pelo arquivo docker-compose.yml.

Ainda na raiz temos arquivos de logs de erros(error.log) e de informações(info.log).

O arquivo server.js, é neste arquivo que é incluído o app.js, responsáveis por iniciarem nossa aplicação.

tests - É dentro desta pasta que criamos nosso teste há duas camadas criadas uma para integração e outra para testes unitários em nosso projeto utilizamos apenas os testes de integração.

## Lista de bibliotecas de terceiros utilizadas

- express; 
- express-validation;
- sequelize; 
- dotenv; 
- factory-girl;
- faker-br 
- winston
- pg, pg-hstore e pg-promise;
- cors;
- jest

## O que você melhoraria se tivesse mais tempo

Refinaria e faria mais testes e adicionaria JWT.

## Quais requisitos obrigatórios que não foram entregues

Neste repositório foram entregues todos os requisitos.

## Testes

```bash
$ npm run test
```

## Como executar o projeto

- Na raiz do projeto renomeie o arquivo .env.example para .env;
- Execute o comando: 
``` docker-compose up
```
- No container execute as migrações com os comando 
```npx sequelize db:migrate
```
```npx sequelize-cli db:seed:all
```


- Autor - Jonathan Cruz
- Website - [https://jonathansc92.github.io/jonathancruzdev/?language=ptBr]

