//Завершите решение, чтобы функция разбивала верблюжий регистр, используя пробелы между словами.

// complete the function
function solution(string) {
    let word = ''

    for(let i = 0; i < string.length; i++){
        if(string[i] == string[i].toUpperCase()){
            word+=" "
            word+=string[i]
        } else {
            word+=string[i]
        }
    }

    return word
}

console.log(solution('romaSobl'))