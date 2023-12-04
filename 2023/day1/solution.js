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

function extractNumber(inStr) {
    const regex = /^(?:.*?(\d).*(\d).*|.*(\d).*)$/m;
    let numArray = inStr.match(regex);
    if (numArray == null) {
        return null;
    }
    let cleanArr = numArray.slice(1).filter(Number);
    if (cleanArr.length == 1) {
        cleanArr.push(cleanArr[0]);
    }
    let numStr = cleanArr.join('');
    return Number(numStr);
}

function main() {
    const data = readData();
    if (data == null) {
        console.error("Data is null");
        return;
    } 
    const dataArr = data.split("\r\n");
    let sum = 0;
    for(let i = 0; i < dataArr.length; i++) {
        let number = extractNumber(dataArr[i]);
        if (number !== null) {
            sum += number;
        }
    }
    return sum;
}

console.log(main());

