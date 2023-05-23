// Напишите функцию, которая принимает строку из одного или нескольких слов
//  и возвращает ту же строку, но с перевернутыми всеми словами из 
//  пяти или более букв (точно так же, как имя этого Ката). Передаваемые строки 
//  будут состоять только из букв и пробелов. Пробелы будут включены только в том 
//  случае, если присутствует более одного слова.

function spinWords(string){
  const arrOne = string.split(' ')
  const arrRes = []
  arrOne.forEach((item) => {
    console.log(item.length)
    item.length >= 5 ? arrRes.push(item.split('').reverse().join('')):arrRes.push(item)
  });
  return arrRes.join(' ')
}

console.log(spinWords('Hey fellow warriors'))