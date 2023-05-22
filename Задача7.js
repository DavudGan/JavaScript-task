// Задача
// Учитывая целое число, определите, является ли оно квадратным числом

var isSquare = function(n){
   let res =  Number.isInteger(Math.sqrt(n))? true: false
    return res
  }

  console.log(isSquare(25))