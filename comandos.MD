npm init -y
//Iniciar o projeto node

npm install express
//Instalar o express

npm install body-parser
//Instalar o body-parser

npm install sequelize@5.21.7 sequelize-cli@5.5.1
//instalar versão expecifica do sequelize 5 + cli

npm install --save-dev nodemon
//instalar o nodemon em dependencia de desenvolvimento
  -> /package.js
  "scripts": {...
  "start": "nodemon index.js",
  ...}

npm run start  
//executar o backend com o nodemon

git init              
//iniciar o projeto git

npm install mysql2  
//Instalar a deopendencia do Mysql

npx sequelize-cli init
//Iniciar um projeto com sequilize, criar pastas padrões

npx sequelize-cli model:create --name Pessoas --attributes nome:string,ativo:boolean,email:string,role:string
//criar migração da tabela Pessoas

npx sequelize-cli db:migrate
//executar as mugrações e criar as tabelas que faltam no banco

npx sequelize-cli seed:generate --name demo-pessoa 
//Criar um seed padrão

npx sequelize-cli db:seed:all
//rodar todos os seeds

npx sequelize db:seed:undo
//Desfaz todos os seeds

npx sequelize-cli db:seed:undo --seed nome-do-arquivo
//Desfaz um seed especifico

Criar pasta e arquivo de controller para Pessoa

Criar pasta e arquivo de routes

Criar o arquivo de rotas para pessoas

