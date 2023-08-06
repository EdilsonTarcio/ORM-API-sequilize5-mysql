const { where } = require('sequelize')
const database = require('../models')

class PessoaController {
  // static = evita ter que criar uma nova instancia de classe 
  // async = espera resolver os outros metodos para devolver a resposta
  
  static async pegaTodasAsPessoas(req, res){
    // await = espera retornar os dados do banco
    // .findAll() = encontrar todas
    //Pessoas = retorno do model pessoas
    try {
      const todasAsPessoas = await database.Pessoas.findAll()
      // .json() = converte o resiltado para o formato json
      return res.status(200).json(todasAsPessoas)  
    } catch (error){
      return res.status(500).json(error.message)
    }
  }

  static async pegaUmaPessoa(req, res){
    const { id } = req.params
    try{                                                       
      const umaPessoa = await database.Pessoas.findOne( { 
      //retorna um registro para encontrar todos os registros seria findAll({where:{id:Numero(id)}})
        where: { 
          id: Number(id) //converte em numero
        }
      })
      if(umaPessoa == null){
        return res.status(400).json({
          message: "Pessoa não cadastrada!"
        })
      }else{
        return res.status(200).json(umaPessoa)
      }
    }catch(error){
      return res.status(500).json(error.message)
    }
  }

  static async criarPessoa(req, res){
    const novaPessoa = req.body
    try{ 
      const novaPessoaCriada = await database.Pessoas.create(novaPessoa)
      return res.status(200).json(novaPessoaCriada)
    }catch (error){ 
      return res.status(500).json(error.message)
    }
  }

  static async atualizarPessoa(req, res){
    const { id } = req.params
    const novasInfos = req.body
    try{ 
      //update -> recebe 2x registros 1ª os dados 2ª o id
      const atualizacao = await database.Pessoas.update(novasInfos, { where: { id: Number(id) } })
      if (atualizacao == true){
        // retorna 1 = true se achar a pessoa e conseguir atualizar
        const pessoaAtualizada = await database.Pessoas.findOne( { 
          //retorna um registro para encontrar todos os registros seria findAll({where:{id:Numero(id)}})
            where: { 
              id: Number(id) //converte em numero
            }
          })
          return res.status(200).json(pessoaAtualizada)
      }else{
        // retorna 0 = false se não achar a pessoa e não conseguir atualizar
        return res.status(400).json({ message: `Id ${id} não encontrado, favor verificar se a pessoa está cadastrada!`})
      }
    }catch (error){
      return res.status(500).json(error.message)
    }
  }

  static async apagaPessoas(req, res) {
    const { id } = req.params
    try{
      const delecao = await database.Pessoas.destroy({ where: { id: Number(id) }})
      if( delecao == true){
        // retorna 1 = true se achar a pessoa e conseguir deletar
        return res.status(200).json({ message: `id ${id}, deletado!`})
      }else{
        // retorna 0 = false se não achar a pessoa e não conseguir deletar
        return res.status(400).json({ message: `id ${id} não encontrado, favor verificar se a pessoa está cadastrada!`})
      }
    }catch(error){
      return res.status(500).json(error.message)
    }
  }

  //localhost:3001/pessoas/:estudanteId/matricula/:matriculaId
static async pegaUmaMatricula(req, res){
  const { estudanteId, matriculaId} = req.params
  try{                                                       
    const umaMatricula = await database.Matriculas.findOne( { 
    //retorna um registro para encontrar todos os registros seria findAll({where:{id:Numero(id)}})
      where: { 
        id: Number(matriculaId),
        estudante_id: Number(estudanteId)
      //coluna no banco   -> variavel
      }
    })
    
    return res.status(200).json(umaMatricula)
  }catch(error){
    return res.status(500).json(error.message)
  }
}
/*
static async criarMatricula(req, res){
  const { estudanteId } = req.params
  const novaMatricula = { ...req.body, estudante_id: Number(estudanteId) }
  try{
    const novaPessoaCriada = await database.Matriculas.create(novaMatricula)
 
    //const sql = await database.Matriculas.create("INSERT INTO `matriculas`( `status`, `estudante_id`,`turma_id`) VALUES ($1,$2)",[novaMatricula.status],[estudanteId],[novaMatricula.turma_id]);
    await sql.save();
    return res.status(200).json(novaPessoaCriada)
  }catch (error){ 
    return res.status(500).json(error.message)
  }
}
*/

}
// exportar o conteudo do controller para ficar disponivel no resto do código
module.exports = PessoaController