//Кратность 3 или 5
function solution(number){
  const result = new Set()
  let sum = 0
  for(let i = 1; i < number; i++){
    if((i % 3 == 0) || (i % 5 == 0)){
      result.add(i)
    }
  }

  result.forEach(elem =>{
    sum +=elem
  })
  
  return sum
}

console.log(solution(10))