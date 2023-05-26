//Напишите алгоритм, который берет массив и перемещает все нули в конец, сохраняя порядок остальных элементов.

function moveZeros(arr) {
  const arrNul =[]
  const arrReturn =[]
  arr.forEach((element) => {
    if(element === 0){
      arrNul.push(element)
    } else {
      arrReturn.push(element)
    }
  });

  for(let i = 0; i < arrNul.length; i++){
    arrReturn.push(arrNul[i])
  }

  return arrReturn
}

console.log(moveZeros([1,2,0,1,0,1,0,3,0,1]))