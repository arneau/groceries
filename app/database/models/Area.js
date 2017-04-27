import Sequelize from 'sequelize'

import Database from '../Database'

const AreaModel = Database.define('area', {
  name: {
    allowNull: false,
    type: Sequelize.STRING
  }
})

AreaModel.belongsTo(AreaModel)

export default AreaModel