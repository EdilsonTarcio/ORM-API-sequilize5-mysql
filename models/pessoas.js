'use strict';
module.exports = (sequelize, DataTypes) => {
  const Pessoas = sequelize.define('Pessoas', {
    nome: DataTypes.STRING,
    ativo: DataTypes.BOOLEAN,
    email: DataTypes.STRING,
    role: DataTypes.STRING
  }, {paranoid: true});
  Pessoas.associate = function(models) {
    Pessoas.hasMany(models.Turmas, {
      foreignKey: 'docente_id'
    })
    //uma Pessoa para muitas turmas
    Pessoas.hasMany(models.Matriculas, {
      foreignKey: 'estudante_id'
    })
    //uma Pessoa para muitas matriculas

  };
  return Pessoas;
};