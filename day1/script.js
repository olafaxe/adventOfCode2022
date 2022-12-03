const fs = require('fs');
try {
  startTime = performance.now()
  const data = fs.readFileSync('./input.txt', 'utf8');
  //seperate data into arrays in array based on empty lines
  const elfs = data.split(/\r?\n\r?\n/);
  //seperate each item in elfs array into arrays of numbers based on new lines
  const elfsNumbers = elfs.map(elf => elf.split(/\r?\n/).map(Number));
  //find the sum of each array in elfsNumbers
  const elfsNumbersSum = elfsNumbers.map(elf => elf.reduce((a, b) => a + b, 0));
  //sort elsNumbersSum in descending order
  const elfsNumbersSumSorted = elfsNumbersSum.sort((a, b) => b - a);
  //add the first three items in elsNumbersSumSorted
  const elfsTopThree = elfsNumbersSumSorted.slice(0, 3).reduce((a, b) => a + b, 0);
  let endTime = performance.now()

  console.log(`Time: ${(((endTime - startTime)/1000)%60)}s`)
} catch (err) {
  console.error(err);
}