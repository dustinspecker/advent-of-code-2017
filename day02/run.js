const fs = require('fs')

const calcRowDiff = row => {
  const cells = row
    .split(/\s+/)
    .map(cell => parseInt(cell, 10))
    .sort((a, b) => a - b)

  return cells[cells.length - 1] - cells[0]
}

const calcChecksum = spreadsheet =>
  spreadsheet
    .split('\n')
    .map(calcRowDiff)
    .reduce((total, cur) => total + cur)

fs.readFile('input.txt', (err, data) => {
  if (err) {
    throw err
  }

  const spreadsheet = data.toString().trim()

  console.log('2a', calcChecksum(spreadsheet))
})
