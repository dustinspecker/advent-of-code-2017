const fs = require('fs')

const solveCaptcha = (str, lookForward = 1) =>
  str
    .split('')
    .map(s => parseInt(s, 10))
    .filter((num, index, array) => num === array[(index + lookForward) % array.length])
    .reduce((total, cur) => total + cur)

fs.readFile('input.txt', (err, data) => {
  if (err) {
    throw err
  }

  const numbersStr = data.toString().trim()

  console.log('1a', solveCaptcha(numbersStr))
  console.log('1b', solveCaptcha(numbersStr, numbersStr.length / 2))
})
