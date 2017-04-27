import Sequelize from 'sequelize'

import Database from '../Database'

const StoreTypeModel = Database.define('store_type', {
  name: {
    allowNull: false,
    type: Sequelize.STRING
  }
})

export default StoreTypeModel