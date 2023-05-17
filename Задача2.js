// Последовательно идущие единицы

// Требуется найти в бинарном векторе самую длинную последовательность единиц и вывести её длину.
//////////////////////////////////////////////////////////////////////////////////////////////
const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
});

let lines = [];
rl.on("line", (line) => {
  lines.push(line);

  if (lines[0] && lines.length >= parseInt(lines[0]) + 1) rl.close();
}).on("close", () => {
  const numbers = lines.slice(1);
  let max = 0;
  let lengthThes = 0;



  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] == 1){
      lengthThes++
    } if (lengthThes > max){
        max = lengthThes
      } if (numbers[i] == 0){
        lengthThes = 0
      } 
    
  }

  process.stdout.write(max.toString());
});