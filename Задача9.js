// Сумма чисел
// Даны два целых числа aи b, которые могут быть положительными или отрицательными, 
// найдите сумму всех целых чисел между ними и включая их и верните ее. 
// Если два числа равны, верните aили b.

function getSum(a, b)
{
  let s = 0
  if (a == b){
    return a
  }
  for (let i = Math.min(a,b); i <= Math.max(a,b); i++) {
   console.log(s += i)
  }
  return s
}

console.log(getSum(5,-1))