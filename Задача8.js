// Крокетный клуб Western Suburbs имеет две категории членства: Senior и Open. 
// Им нужна ваша помощь с формой заявки, в которой потенциальным членам будет указано, в какую категорию они будут помещены.

// Чтобы быть пожилым, член должен быть не моложе 55 лет и иметь гандикап больше 7. 
// В этом крокетном клубе гандикап варьируется от -2 до +26; чем лучше игрок, тем ниже гандикап.

const arr = [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]

function openOrSenior(data){
  const res = []

  data.forEach((item, index, array) => {
    if(array[index][0] >= 55 && array[index][1] > 7){
      res.push('Senior')
    } else {
      res.push('Open')
    }
  });
  
  return res
}

console.log(openOrSenior(arr))