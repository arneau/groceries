import Sequelize from 'sequelize'

import Database from '../Database'

import MeasurementUnitModel from './MeasurementUnit'

const MeasurementModel = Database.define('measurement', {
  amount: {
    type: Sequelize.STRING
  }
})

MeasurementModel.belongsTo(MeasurementUnitModel)

export default MeasurementModel