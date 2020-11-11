
let winMatch = 3;
let remisMatch = 4;
let failureMatch = 2;

function footballPoints (win, remis, failure) {
    return win * 3 + remis * 1 + failure * 0;
}

console.log('Ilość wygranych ' + winMatch);
console.log('Ilość remisów ' + remisMatch);
console.log('Ilość przegrnych ' + failureMatch);


console.log('Ilość punktów: ' + footballPoints(winMatch, remisMatch, failureMatch));
