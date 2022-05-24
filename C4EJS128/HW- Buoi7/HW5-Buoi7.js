let result = ''
for (let i = 0; i <=9; i++) {
    for (let j = 0; j <= 9; j++) {
        if ((i < j) || (i <= 9 - 1) && (i - j >= 1) && j >= 1) {
            result += " "
        } else {
            result += "*"
        }
    }
    result += '\n'
}
console.log(result)