var fs = require("fs");
const generateDailyAmounts = require('./generateDailyAmounts')

const writeDailyAmounts = (goal, period) => {

  const generatedDailyAmounts = JSON.stringify(generateDailyAmounts(goal,period))
  const code = `const dailyAmounts = ${generatedDailyAmounts}

module.exports = dailyAmounts`

  fs.writeFile('../dailyAmounts.js', code, function(err) {
    if(err) {
          console.log(err);
    } 
    else {
      console.log("Output saved to dailyAmounts.js");
    }
  });
}

module.exports = writeDailyAmounts

