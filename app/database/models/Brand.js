import Sequelize from 'sequelize'

import Database from '../Database'

const BrandModel = Database.define('brand', {
  name: {
    allowNull: false,
    type: Sequelize.STRING
  }
})

export default BrandModel