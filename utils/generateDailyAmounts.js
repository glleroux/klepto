const generateDailyAmounts = (goal, period) => {

    const savingsGoal = goal
    const savingsPeriod = period
    const factor = savingsGoal/savingsPeriod/(savingsPeriod+1)

    const days = [...Array(savingsPeriod+1).keys()].slice(1)

    const calculateCumulativeAmount = (dayNum) => {
        return dayNum * factor * (dayNum+1)
    }

    const savingsAmounts = days.map(dayNum => parseFloat((calculateCumulativeAmount(dayNum) - calculateCumulativeAmount(dayNum-1)).toFixed(2)))

    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    shuffleArray(savingsAmounts)
    console.log(savingsAmounts)
    return savingsAmounts
}

// createDailyAmounts(2000,365)

module.exports = generateDailyAmounts