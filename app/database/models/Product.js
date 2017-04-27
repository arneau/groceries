import Sequelize from 'sequelize'

import Database from '../Database'

import BrandModel from './Brand'

const ProductModel = Database.define('product', {
  name: {
    allowNull: false,
    type: Sequelize.STRING
  }
})

ProductModel.belongsTo(BrandModel)

export default ProductModel