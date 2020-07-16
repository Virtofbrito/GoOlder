//BANCO DE DADOS
module.exports = {
  dialect: 'postgres',
  host: '127.0.0.1',
  username: 'docker',
  password: 'docker',
  database: 'agetest',
  operatorAliases: false,
  define: {
    //timestamps cria campos created at e updated at
    timestamps: true,
    underscored: true,
    underscoredAll: true
  }
}
