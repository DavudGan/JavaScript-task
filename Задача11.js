// Цифровой корень — это рекурсивная сумма всех цифр числа.

// Учитывая n, возьмите сумму цифр n. Если это значение имеет более одной цифры, 
// продолжайте уменьшать таким образом, пока не будет получено однозначное число. 
// Ввод будет неотрицательным целым числом.

function digitalRoot(n) {
  let a = String(n)
  let res = 0
  res = sum(a)
  while(a.length > 1){
    res = sum(a)
    a = String(res)
  }
  
  return res
}

function sum(n) {
  let s = 0
  n.split('').forEach((item,index,arr) => {
    arr.length > 0  ? s += Number(item):item
  });
  return s
}

console.log(digitalRoot(493193))