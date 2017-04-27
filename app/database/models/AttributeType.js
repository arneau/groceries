import Sequelize from 'sequelize'

import Database from '../Database'

const AttributeTypeModel = Database.define('attribute_type', {
  name: {
    allowNull: false,
    type: Sequelize.STRING
  }
})

export default AttributeTypeModel