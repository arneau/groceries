import Sequelize from 'sequelize'

import Database from '../Database'

const ContainerTypeModel = Database.define('container_type', {
  name: {
    allowNull: false,
    type: Sequelize.STRING
  }
})

export default ContainerTypeModel