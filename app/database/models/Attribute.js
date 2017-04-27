import Sequelize from 'sequelize'

import Database from '../Database'

import AttributeTypeModel from './AttributeType'

const AttributeModel = Database.define('attribute', {
  value: {
    type: Sequelize.STRING
  }
})

AttributeModel.belongsTo(AttributeTypeModel, { as: 'type' })

export default AttributeModel