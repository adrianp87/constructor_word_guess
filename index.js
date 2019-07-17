const fs = require('fs')
const [, , keyPress] = process.argv
let guess = keyPress.toUpperCase()
console.log(guess)
//empty variables, if we want them to be string/number are declared as varNam
//if declared variable is an array, then declare them as varName = []
let hiddenName = []
const names = ['Hamza', 'Adrian', 'Gia', 'Bryan']
console.log(names)

// names.push('Jack')
console.log(names)

let randomNumberGenerator = Math.floor((Math.random() * names.length))
console.log(randomNumberGenerator)
// console.log('Hamza')
console.log(names[randomNumberGenerator])

//guessName is an Array
let guessName = names[randomNumberGenerator].toUpperCase().split("")
console.log(guessName)

// When console.log element of array at the end of array name [0]
console.log(guessName[0])


// Strings not written in quotes
for(let i = 0; i < guessName.length; i++) {
    hiddenName[i] = guessName[i].replace(guessName[i], '_')
}
console.log(hiddenName)


for(let i = 0; i < guessName.length; i++) {
if(guess === guessName[i]) {
console.log(true)
hiddenName[i] = guess
}
}







console.log(hiddenName)


// for(let i = 0; i < guessName.length; i++) {
    
//     hiddenName[i] = guessName[i].replace(guessName[i], '_')
    
// }