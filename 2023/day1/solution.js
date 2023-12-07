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

const strToNum = {
    "one": "1",
    "two": "2",
    "three": "3",
    "four": "4",
    "five": "5",
    "six": "6",
    "seven": "7",
    "eight": "8",
    "nine": "9"
};

const regexBeg = /.*?(one|two|three|four|five|six|seven|eight|nine|\d)/;
const regexEnd = /.*(one|two|three|four|five|six|seven|eight|nine|\d).*$/;

function getNum(str) {
    if (strToNum.hasOwnProperty(str)) {
        return strToNum[str];
    } 
    return str;
}

function extractNumber(inStr) {
    let num1arr = inStr.match(regexBeg);
    let num2arr = inStr.match(regexEnd);
    let numArray = [];
    numArray.push(num1arr[1], num2arr[1]);
    let numbersArr = numArray.map(getNum);
    let cleanArr = numbersArr.filter(Number);
    if (cleanArr.length == 1) {
         cleanArr.push(cleanArr[0]);
    }
    let numStr = numbersArr.join('');
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
        sum += extractNumber(dataArr[i]);
    }

    return sum;
}

console.log(main());

