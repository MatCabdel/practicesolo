const numberChoice = prompt('quel est votre chiffre?')

if (numberChoice < 0 || numberChoice >= 10) {
    console.log("Le chiffre n'est pas entre 0 et 10")
} else {
for( let i = numberChoice; i >= 0; i--) {
    console.log(i)
}
}
