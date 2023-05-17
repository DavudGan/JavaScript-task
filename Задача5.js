//Анаграммы

// Даны две строки, состоящие из строчных латинских букв. 
// Требуется определить, являются ли эти строки анаграммами, т. е. отличаются ли они только порядком следования символов.
//////////////////////////////////////////////////////////////////////////////////////////////

const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
});

let lines = [];
rl.on("line", (line) => {
  lines.push(line);
}).on("close", () => {
    const [firstStr, secondStr] = lines

   const result = Number(firstStr.split('').sort().join('') === secondStr.split('').sort().join('')) ? 1:0

    process.stdout.write(result.toString());
  
});