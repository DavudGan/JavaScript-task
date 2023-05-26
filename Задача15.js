// Вам будет предоставлен массив чисел. Вы должны отсортировать нечетные числа в порядке возрастания, 
// оставив четные числа на их исходных позициях.

function sortArray(array) {
  const oddNumbersSort = []
  const oddNumbersResult = []
  let chek = 0
  array.forEach(element => {
    if(element % 2 !== 0){
      oddNumbersSort.push(element)
    } 
  });

  oddNumbersSort.sort((a, b) => a - b)

  array.forEach(element => {
    if(element % 2 !== 0){
      oddNumbersResult.push(oddNumbersSort[chek])
      chek++
    } else {
      oddNumbersResult.push(element)
    }
  });
  return oddNumbersResult
}

console.log(sortArray([1, 3, 2, 8, 5, 4, 11]))