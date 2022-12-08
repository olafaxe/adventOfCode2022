const fs = require('fs');
try {
  startTime = performance.now()
  const data = fs.readFileSync('./inputTest.txt', 'utf8');
  const cmds = data.split(/\r?\n/);
  console.log(cmds);
  let endTime = performance.now()

  console.log(`Time: ${(((endTime - startTime)/1000)%60)}s`)
} catch (err) {
  console.error(err);
}