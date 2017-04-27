import Sequelize from 'sequelize'

import Database from '../Database'

import AreaModel from './Area'
import RetailerModel from './Retailer'
import StoreTypeModel from './StoreType'

const StoreModel = Database.define('store', {
  name: {
    type: Sequelize.STRING
  }
})

StoreModel.belongsTo(RetailerModel)
StoreModel.belongsTo(AreaModel)
StoreModel.belongsTo(StoreTypeModel, { as: 'type' })

export default StoreModel