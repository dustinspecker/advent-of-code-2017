const fs = require('fs')

const converRowsToCells = row =>
  row
    .split(/\s+/)
    .map(cell => parseInt(cell, 10))
    .sort((a, b) => a - b)

const calcRowDiff = cells =>
  cells[cells.length - 1] - cells[0]

const calcRowEvenDivide = cells => {
  for (let i = 0; i < cells.length; i++) {
    for (let j = i + 1; j < cells.length; j++) {
      if (cells[j] % cells[i] === 0) {
        return cells[j] / cells[i]
      }
    }
  }
}

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
  console.log('2b', calcChecksum(spreadsheet, calcRowEvenDivide))
})
