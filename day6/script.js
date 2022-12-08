const fs = require("fs");

const isUnique = (str) => {
  return new Set(str).size == str.length;
};

const findMSG = (string) => {
    let tempArr = [];
  let findA = 0;
  let findB = 1;
  let findC = 2;
  let findD = 3;
  let findE = 4;
  let findF = 5;
  let findG = 6;
  let findH = 7;
  let findI = 8;
  let findJ = 9;
  let findK = 10;
  let findL = 11;
  let findM = 12;
  let findN = 13;
  for (let i = 0; i < string.length; i++) {
    tempArr.push(string[i]);
    if (tempArr.length < 14) {
      console.log("nothing yet");
    } else {
      const sequence = isUnique(
        [tempArr[findA], tempArr[findB], tempArr[findC], tempArr[findD], tempArr[findE], tempArr[findF], tempArr[findG], tempArr[findH], tempArr[findI], tempArr[findJ], tempArr[findK], tempArr[findL], tempArr[findM], tempArr[findN]].flat()
      );

      if (sequence) {
        console.log("message: ",i + 1);
        return;
      }

      findA += 1;
      findB += 1;
      findC += 1;
      findD += 1;
      findE += 1;
      findF += 1;
      findG += 1;
      findH += 1;
      findI += 1;
      findJ += 1;
      findK += 1;
      findL += 1;
      findM += 1;
      findN += 1;
    }
  }
};

const findMarker = (string) => {
  let tempArr = [];
  let findA = 0;
  let findB = 1;
  let findC = 2;
  let findD = 3;

  for (let i = 0; i < string.length; i++) {
    tempArr.push(string[i]);
    if (tempArr.length < 4) {
      console.log("nothing yet");
    } else {
      const sequence = isUnique(
        [tempArr[findA], tempArr[findB], tempArr[findC], tempArr[findD]].flat()
      );

      if (sequence) {
        console.log("marker: ", i + 1);
        return;
      }

      findA += 1;
      findB += 1;
      findC += 1;
      findD += 1;
    }
  }
};

try {
  startTime = performance.now();
  const data = fs.readFileSync("./input.txt", "utf8");

  findMarker(data);
  findMSG(data);
  let endTime = performance.now();
  console.log(`Time: ${((endTime - startTime) / 1000) % 60}s`);
} catch (err) {
  console.error(err);
}
