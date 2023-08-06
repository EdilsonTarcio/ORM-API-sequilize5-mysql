const { where, Association } = require('sequelize')
const database = require('../models')

class NivelController {

  static async pegaTodosOsNiveis(req, res){
    try {
      const todosOsNiveis = await database.Niveis.findAll()
      return res.status(200).json(todosOsNiveis)
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async pegaUmNivel(req, res) {
    const { id } = req.params
    try{
      const umNivel = await database.Niveis.findOne({
        where: { 
          id: Number(id)}
      })
      if(umNivel == null){
        return res.status(404).json({ 
          message: "Nivél não encontrado!"
        })
      }else{
        return res.status(200).json(umNivel)
      }
    }catch(error){
      return res.status(500).json(error.message)
    }
  }

  static async criarNivel(req, res) {
    const novoNivel = req.body
    try { 
      const novoNivelCriado = await database.Niveis.create(novoNivel)
      return res.status(200).json(novoNivelCriado)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async atualizaNivel(req, res) {
    const { id } = req.params
    const novasInfos = req.body
    try {
      //variavel atualizacao é apenas para validação, poderia declarar dessa forma:
      // await database.Niveis.update(novasInfos, {
      const atualizacao = await database.Niveis.update(novasInfos, {
        where: { id: Number(id) }
      })
      if (atualizacao == true){
        // retorna 1 = true se achar o nivel e conseguir atualizar
        const nivelAtualizado = await database.Niveis.findOne( { 
          //retorna um registro para encontrar todos os registros seria findAll({where:{id:Numero(id)}})
            where: { 
              id: Number(id) //converte em numero
            }
          })
          return res.status(200).json(nivelAtualizado)
      }else{
        // retorna 0 = false se não achar a pessoa e não conseguir atualizar
        return res.status(400).json({ message: `Id ${id} não encontrado, favor verificar se a pessoa está cadastrada!`})
      }
    }catch(error) {
      return res.status(500).json(error.message)
    }
  }

  static async apagaNivel(req, res) {
    const { id } = req.params
    try{
      const delecao = await database.Niveis.destroy({ where: { id: Number(id) }})
      if( delecao == true){
        // retorna 1 = true se achar a pessoa e conseguir deletar
        return res.status(200).json({ message: `id ${id}, deletado!`})
      }else{
        // retorna 0 = false se não achar a pessoa e não conseguir deletar
        return res.status(400).json({ message: `id ${id} não encontrado, favor verificar se o nível está cadastrada!`})
      }
    }catch(error){
      return res.status(500).json(error.message)
    }
  }

}
module.exports = NivelController