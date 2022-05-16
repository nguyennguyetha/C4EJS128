//i = row 
//j = column


let result = '';
let column = 10;
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= column; j++) {
      if (j === cot / 2 + 1 - i || j === column / 2 + i) {
        result += '*';
      } else {
        result += ' ';
      }
  }
  result += '\n';
}
for (let i = 4; i >= 1; i--) {
  for (let j = 1; j <= column; j++) {
      if (j === column / 2 + 1 - i || j === column / 2 + i) {
        result += '*';
      } else {
        result += ' ';
      }
  }
  result += '\n';
}
console.log(result);