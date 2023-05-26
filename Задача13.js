// Переместите первую букву каждого слова в конец, затем добавьте «ay» в конец слова. 
// Оставьте знаки препинания нетронутыми.

function pigIt(str){
  let word = str.split(" ")
  let ret = []
  let re_punct = new RegExp(/\!|\?|\.|\,/);
  word.forEach(element => {
    if(re_punct.test(element)){
      ret.push(element)
    } else {
      let w = element.slice(1)+(element[0]+"ey")
      ret.push(w)
    }
  });

  return ret.join(' ')
}

console.log(pigIt("Davudik sex !"))