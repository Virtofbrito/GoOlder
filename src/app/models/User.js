
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    //DEFINE PARTES DO USER
    'User',
    {
      age: DataTypes.INTEGER
    }
  )

  return User
}
