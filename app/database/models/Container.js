import Sequelize from 'sequelize'

import Database from '../Database'

import ContainerTypeModel from './ContainerType'
import VariationModel from './Variation'

const ContainerModel = Database.define('container', {
  amount: {
    type: Sequelize.INTEGER
  }
})

ContainerModel.belongsTo(ContainerTypeModel, { as: 'type' })
ContainerModel.belongsTo(VariationModel)

export default ContainerModel