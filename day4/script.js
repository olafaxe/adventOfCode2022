

const fs = require('fs');

const checker = (arr, target) => target.every(v => arr.includes(v));

const checker2 = (arr, target) => target.some(v => arr.includes(v));

const calcAssignment = (assignment) => { 
    const workArr = assignment.split('-');
    const start = Number(workArr[0]);
    const stop = Number(workArr[1]);
    let range = [];
    for (let i = start; i <= stop; i++) {
        range.push(i);
    }
   return range;
}
try {
  startTime = performance.now()
  const data = fs.readFileSync('./input.txt', 'utf8');
  const pairs = data.split(/\r?\n/).map(pair => {
    const elfs = pair.split(',');
    elf1 = calcAssignment(elfs[0]);
    elf2 = calcAssignment(elfs[1]);
    const elf1Inelf2 = checker2(elf1, elf2);
    if(elf1Inelf2) return true;
    const elf2Inelf1 = checker2(elf2, elf1);
    if(elf2Inelf1) return true;
    else return false;
  });

  const numberOfOverlaps = pairs.filter(overlap => overlap === true);
  console.log(numberOfOverlaps.length)
  let endTime = performance.now()

  console.log(`Time: ${(((endTime - startTime)/1000)%60)}s`)
} catch (err) {
  console.error(err);
}