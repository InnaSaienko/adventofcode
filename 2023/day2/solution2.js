const { match } = require("node:assert");
const fs = require("node:fs");

function readData() {
    let data ;
    try {
        data = fs.readFileSync("input.txt", "utf8");      
    } catch (err) {
        console.error(err);
        data = null;
    }
    return data;
}

function getPowerOfSets(cubeInfo) {
    let setsInfo = cubeInfo.split(";");
    const cubes = {
        "red": 1,
        "green": 1,
        "blue": 1
    }
    for (let i = 0; i < setsInfo.length; i++) {
        let set = setsInfo[i].split(",");
        for (let y = 0; y < set.length; y++) {
            let cube = set[y].trim().split(" ");
            let num = Number(cube[0]);
            let color = cube[1];

            if (num > cubes[color]) {
                cubes[color] = num;
            }
        }
    }
    return Object.values(cubes).reduce((a, b) => a * b);
}

function solvePuzzle(strArr) {
    let powerSum = 0;
    for (let i = 0; i < strArr.length; i++) {
        let line = strArr[i];
        let lineSplit = line.split(":");
        let setsInfo = lineSplit[1];
        powerSum += (getPowerOfSets(setsInfo));
    }
    return powerSum;
}

function main() {
    const data = readData();
    
    if (data == null) {
        console.error("Data is null");
        return;
    } 
    const strArr = data.split(/\r\n/);
    let answer = solvePuzzle(strArr);

    console.log(answer);
    
    return answer;
}

main();
