import Sequelize from 'sequelize'

import Database from '../Database'

import ProductModel from './Product'

const VariationModel = Database.define('variation', {
  name: {
    type: Sequelize.STRING
  }
})

VariationModel.belongsTo(ProductModel)

export default VariationModel