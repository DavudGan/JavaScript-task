//C. Удаление дубликатов

// Дан упорядоченный по неубыванию массив целых 32-разрядных чисел. Требуется удалить из него все повторения.
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

  const arr = lines;


  arr.forEach((item, index, arry)=>{
    if ((arry[index] !== arry[index+1]) && index > 0){
          
          process.stdout.write(item+"\n")
    }
  })
  
});