import Sequelize from 'sequelize'

import Database from '../Database'

const RetailerModel = Database.define('retailer', {
  name: {
    allowNull: false,
    type: Sequelize.STRING
  }
})

export default RetailerModel