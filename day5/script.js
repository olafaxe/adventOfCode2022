const fs = require('fs');



const createCrateStacksHandler = (unorderedCrates) => {
    let orderedCratesArr = [];
    const times = Math.ceil(unorderedCrates[0].length/4);
    let tempArr = [];
    let colNum = 0;
    let x = 0;
    let z = 3;
    for(let i = 0; i < unorderedCrates.length; i++) {
        for(let y = 0; y < times; y++) {
            if(z > unorderedCrates[0].length) {
                colNum = 0;
                x = 0;
                z = 3;
            }
            const piece = unorderedCrates[i].slice(x, z);
            if(tempArr[colNum] === undefined) {
                let newColumn = [];
                tempArr.push(newColumn);
                tempArr[colNum].push(piece);
            } else {
                tempArr[colNum].push(piece);
            }
            colNum = colNum + 1;
            z = z + 4;
            x = x + 4;
           
        }
        orderedCratesArr = tempArr;
    }
    const filteredOrdered = orderedCratesArr.map(array => array.filter(crate => crate !== '   '));
    return filteredOrdered;

}

const movingCratesWithCraneHandler = (instructions, crates) => {
    let newCrates = crates;
    //do instructions
    console.log(instructions);
    for(let i = 0; i < instructions.length; i++) {
        const currentInstruction = instructions[i];
        const numberOfCrates = Number(currentInstruction[0]);
        const fromIndex = currentInstruction[1]-1;
        const toIndex = currentInstruction[2]-1;
        for(y = 0; y < numberOfCrates; y++) {
            const moveCrate = newCrates[fromIndex].shift();
            newCrates[toIndex].unshift(moveCrate);
        }
    }

    return newCrates;
}

const movingCratesWithCraneHandler9001 = (instructions, crates) => {
    let newCrates = crates;
    //do instructions
    for(let i = 0; i < instructions.length; i++) {
        const currentInstruction = instructions[i];
        const numberOfCrates = Number(currentInstruction[0]);
        const fromIndex = currentInstruction[1]-1;
        const toIndex = currentInstruction[2]-1;
        let tempArr = [];
        for(y = 0; y < numberOfCrates; y++) {
            const moveCrate = newCrates[fromIndex].shift();
            tempArr.push(moveCrate);
            if(y === numberOfCrates-1) {
                newCrates[toIndex].unshift(...tempArr);
                tempArr = [];
            }
        }
    }
    console.log(newCrates);
    return newCrates;
}


try {
  startTime = performance.now()
  const data = fs.readFileSync('./input.txt', 'utf8');
 //seperate data into arrays in array based on empty lines
    const cratesAndInstructions = data.split(/\r?\n\r?\n/);
    const unorderedCrates = cratesAndInstructions.filter((item, index) => index === 0).map(crates => crates.split(/\r?\n/));
        const cratesArray = unorderedCrates[0].map(crate => crate).filter((crate, index) => index !== unorderedCrates[0].length-1);
        const orderedCrates = createCrateStacksHandler(cratesArray);


    // const crates = cratesArray.map(crate => crate.split(''));
    const filteredInstructions = cratesAndInstructions.filter((item, index) => index != 0).map(instruction => instruction.split(/\r?\n/))[0];
    const instructions = filteredInstructions.map(instruction => instruction.replace(/\D/g, ',').replace(',,,,,', '').replace(',,,,,,', ',').replace(',,,,', ',').split(','));

    const newCrates = movingCratesWithCraneHandler9001(instructions, orderedCrates);
    newCrates.map((stack) => console.log("crate at the top is: ", stack[0]));


  let endTime = performance.now()

  console.log(`Time: ${(((endTime - startTime)/1000)%60)}s`)
} catch (err) {
  console.error(err);
}