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
}
// exportar o conteudo do controller para ficar disponivel no resto do código
module.exports = PessoaController