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

npx sequelize-cli model:create --name Niveis --attributes descr_nivel:string
//Criar modelo e migrações para a tabela niveis com um campo string o ID já é automatico

npx sequelize-cli model:create --name Turmas --attributes data_inicio:dateonly
// Criar modelo e migrações para a tabela turmas sem as FK

npx sequelize-cli model:create --name Matriculas --attributes status:string
 // Criar modelo e migrações para a tabela Matricula sem as FK

Adicionar associação de tabelas de um para muitos e feito com dois elementos "hasMany" e "belongTo":
  A.hasMany(B, {
      foreignKey: 'nome da coluna para se tornar a FK em B'
    }) 
//um para muitos, a FK(foreign key) deve ser declarada em B

A.belongsTo(B)
//informa que a tabela A pertence a tabela B

Realizar a associação tanto do "hasMany" quanto do "belongTo"

Criar coluna nas migrations, feito em turmas:
docente_id:{
  allowNull: false, //não pode ser null
  type: Sequelize.INTEGER, //tipo inteiro
  references: { //declarar as referencias
    model: 'Pessoas', key: 'id' //informar o modelo e a coluna que será utilizado para referenciar
}

npx sequelize-cli db:migrate
//criar as tabelas no banco

