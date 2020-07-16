'use strict';

module.exports = {
  //ENVIA O NOVO DADO/TABELA
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      age: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    })
  },

  //DELETA O DADO/TABELA
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  }
};
