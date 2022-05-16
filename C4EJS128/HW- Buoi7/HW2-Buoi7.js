

let result = ''
const row = 11;
const column = 6;
for (let i=1; i<=11; i++){
   for (let j=1; j<=6; j++){
       if((j> row + 1 - i && i<= column) || (i>=column && j<= i +1 - column)){
           result += '*';
       }else{
           result += '';

       }

   }
   result += '\n'
}
console.log(result);