import Sequelize from 'sequelize'

import Database from '../Database'

const MeasurementUnitModel = Database.define('measurement_unit', {
  abbreviation: {
    type: Sequelize.STRING
  },
  name: {
    type: Sequelize.STRING
  }
})

export default MeasurementUnitModel