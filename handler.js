require('dotenv').config()
const Starling = require('starling-developer-sdk')
const { v4: uuidv4 } = require('uuid');
const dailyAmounts = require('./dailyAmounts');
const writeDailyAmounts = require('./utils/writeDailyAmounts')
const moment = require('moment')

const transferUid = uuidv4();
const day = moment().dayOfYear()

console.log(day)

const client = new Starling({
    accessToken: process.env.STARLING_ACCESS_TOKEN,
    accountUid: process.env.STARLING_ACCOUNT_UID,
    savingsGoalUid: process.env.STARLING_SPACE_UID,
    transferUid: transferUid,
    amount: Math.round((dailyAmounts[day-1] * 100)),
    currency: 'GBP'
  });

module.exports.transfer = async (event) => {
  try {
      const response = await client.savingsGoal.addMoneyToSavingsGoal()
      console.log(response.data)
  } catch (error) {
      console.log(error)
  }
}

module.exports.generate = async (event) => {
  try {
    writeDailyAmounts(2000,365)
  } catch (error) {
      console.log(error)
  }
}



