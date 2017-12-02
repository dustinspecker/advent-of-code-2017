const fs = require('fs')

const converRowsToCells = row =>
  row
    .split(/\s+/)
    .map(cell => parseInt(cell, 10))
    .sort((a, b) => a - b)

const calcRowDiff = cells =>
  cells[cells.length - 1] - cells[0]

const calcChecksum = (spreadsheet, calcRowMethod) =>
  spreadsheet
    .split('\n')
    .map(converRowsToCells)
    .map(calcRowMethod)
    .reduce((total, cur) => total + cur)

fs.readFile('input.txt', (err, data) => {
  if (err) {
    throw err
  }

  const spreadsheet = data.toString().trim()

  console.log('2a', calcChecksum(spreadsheet, calcRowDiff))
})
