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

function isSetsPossible(cubeInfo, cubeTotals) {
    let setsInfo = cubeInfo.split(";");
    for (let i = 0; i < setsInfo.length; i++) {
        let set = setsInfo[i].split(",");
        for (let y = 0; y < set.length; y++) {
            let cube = set[y].trim().split(" ");
            let num = Number(cube[0]);
            let color = cube[1];
            if (num > cubeTotals[color]) {
                return false;
            }
        }
    }
    return true;
}

function getGameId(gameInfo) {
    let gameArr = gameInfo.split(" ");
    let gameId = Number(gameArr[1]);
    return gameId;
}

function solvePuzzle(strArr) {
    let sumGames = 0;
    const cubeTotals = {
        "red": 12,
        "green": 13,
        "blue": 14
    }
    for (let i = 0; i < strArr.length; i++) {
        let line = strArr[i];
        let lineSplit = line.split(":");
        let setsInfo = lineSplit[1];
        if (isSetsPossible(setsInfo, cubeTotals)) {
            let gameInfo = lineSplit[0];
            sumGames += getGameId(gameInfo);
        }
    }
    return sumGames;
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
