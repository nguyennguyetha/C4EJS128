let result = ''
for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= 9; j++) {
        if (((i > j || j + i > 9 + 1) && i <= (9 + 1) / 2) || (i > (9 + 1) / 2 && ((i + j < 9 + 1) || j > i))) {
            result += " "
        } else {
            result += "*"
        }
    }
    result += '\n'
}
console.log(result)