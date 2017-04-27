import Sequelize from 'sequelize'

import Database from '../Database'

import AreaModel from './Area'
import RetailerModel from './Retailer'
import StoreModel from './Store'
import VariationModel from './Variation'

const PriceModel = Database.define('price', {
  amount: {
    allowNull: false,
    type: Sequelize.FLOAT(8, 2)
  },
  from: {
    defaultValue: Sequelize.NOW,
    type: Sequelize.DATE
  },
  to: {
    type: Sequelize.DATE
  }
})

PriceModel.belongsTo(AreaModel)
PriceModel.belongsTo(RetailerModel)
PriceModel.belongsTo(StoreModel)
PriceModel.belongsTo(VariationModel)

export default PriceModel