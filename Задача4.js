//Генерация скобочных последовательностей

// Дано целое число n. 
// Требуется вывести все правильные скобочные последовательности длины 2 ⋅ n, 
// упорядоченные лексикографически (см. https://ru.wikipedia.org/wiki/Лексикографический_порядок).

// В задаче используются только круглые скобки.
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
  let skob = []

  for (let i = 0; i < numbers; i++){
    skob.push('()')
}
process.stdout.write(skob.join('').toString());
});