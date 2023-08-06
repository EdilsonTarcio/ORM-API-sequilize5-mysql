const { where } = require('sequelize')
const database = require('../models')

class TurmaController {

  static async pegaTodasAsTurmas(req, res) {
    try {
      const todasAsTurmas = await database.Turmas.findAll()
      return res.status(200).json(todasAsTurmas)
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async pegaUmaTurma(req, res) {
    const { id } = req.params
    try{
      const umaTurma = await database.Turmas.findOne({
        where: { 
          id: Number(id)}
      })
      if(umaTurma == null){
        return res.status(404).json({ 
          message: "Turma não encontrada!"
        })
      }else{
        return res.status(200).json(umaTurma)
      }
    }catch(error){
      return res.status(500).json(error.message)
    }
  }

  static async criarTurma(req, res) {
    const novaTurma = req.body
    try { 
      const novaTurmaCriada = await database.Turmas.create(novaTurma)
      return res.status(200).json(novaTurmaCriada)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async atualizaTurma(req, res) {
    const { id } = req.params
    const novasInfos = req.body
    try {
      //variavel atualizacao é apenas para validação, poderia declarar dessa forma:
      // await database.Niveis.update(novasInfos, {
      const atualizacao = await database.Turmas.update(novasInfos, {
        where: { id: Number(id) }
      })
      if (atualizacao == true){
        const turmaAtualizado = await database.Turmas.findOne( { 
          //retorna um registro para encontrar todos os registros seria findAll({where:{id:Numero(id)}})
            where: { 
              id: Number(id) //converte em numero
            }
          })
          return res.status(200).json(turmaAtualizado)
      }else{
        // retorna 0 = false se não achar a pessoa e não conseguir atualizar
        return res.status(400).json({ message: `Id ${id} não encontrado, favor verificar se a turma está cadastrada!`})
      }
    }catch(error) {
      return res.status(500).json(error.message)
    }
  }

  static async apagaTurma(req, res) {
    const { id } = req.params
    try{
      const delecao = await database.Turmas.destroy({ where: { id: Number(id) }})
      if( delecao == true){
        // retorna 1 = true se achar a pessoa e conseguir deletar
        return res.status(200).json({ message: `id ${id}, deletado!`})
      }else{
        // retorna 0 = false se não achar a pessoa e não conseguir deletar
        return res.status(400).json({ message: `id ${id} não encontrado, favor verificar se a turma está cadastrada!`})
      }
    }catch(error){
      return res.status(500).json(error.message)
    }
  }
}
module.exports = TurmaController