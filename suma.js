const numbers = [18,20,19,29,26,28,25]
let index = 0 
let suma = 0 
do{
  suma += numbers[index] 
  index++
  console.log(suma)
}while(index < numbers.length)
console.log("el total es:", suma)