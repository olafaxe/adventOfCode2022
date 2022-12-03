const fs = require('fs');



const checkWinnerRockPaperScissors = (opponent, you) => {
    let oppVal = opponent === 'A' ? 1 : opponent === 'B' ? 2 : 3; 
    let youVal = you === 'X' ? 1 : you === 'Y' ? 2 : 3;
    const win = 6;
    const draw = 3;
    const loss = 0;

    if (oppVal === youVal) {
        return draw + youVal;
    } else if (oppVal === 1 && youVal === 2) {
        return win + youVal;
    } else if (oppVal === 1 && youVal === 3) {
        return loss + youVal;
    } else if (oppVal === 2 && youVal === 3) {
        return win + youVal;
    } else if (oppVal === 2 && youVal === 1) {
        return loss + youVal;
    } else if (oppVal === 3 && youVal === 1) {
        return win + youVal;
    } else if (oppVal === 3 && youVal === 2) {
        return loss + youVal;
    }
}

const checkWinnerRockPaperScissors2 = (opponent, condition) => {
    const win = 6;
    const draw = 3;
    const loss = 0;
    let oppVal = opponent === 'A' ? 1 : opponent === 'B' ? 2 : 3; 
    let cond = condition === 'X' ? 'loss' : condition === 'Y' ? 'draw' : 'win';
    let youVal = oppVal === 1 && cond === 'loss' ? 3 + loss : oppVal === 1 && cond === 'draw' ? 1 + draw : oppVal === 1 && cond === 'win' ? 2 + win : oppVal === 2 && cond === 'loss' ? 1 + loss : oppVal === 2 && cond === 'draw' ? 2 + draw : oppVal === 2 && cond === 'win' ? 3 + win : oppVal === 3 && cond === 'loss' ? 2 + loss : oppVal === 3 && cond === 'draw' ? 3 + draw : oppVal === 3 && cond === 'win' ? 1 + win : null;
  
   return youVal;
}




try {
  startTime = performance.now()
  const data = fs.readFileSync('./input.txt', 'utf8');
  //seperate data into arrays in array based on new lines
    const rockPaperScissors = data.split(/\r?\n/);
    const score = rockPaperScissors.map(set => checkWinnerRockPaperScissors2(set[0], set[2]));
    //add numbers in score array
    const scoreSum = score.reduce((a, b) => a + b, 0);
  console.log(scoreSum);
  let endTime = performance.now()

} catch (err) {
  console.error(err);
}