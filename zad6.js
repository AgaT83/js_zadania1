let chickenNumber = 5;
let cowNumber = 2;
let pigNumber = 8;

function animals(chicken, cow, pig) {
      return chicken * 2 + cow * 4 + pig * 4;
}

console.log('Liczba nóg wszystkich zwierząt wynosi: ' + animals(chickenNumber, cowNumber, pigNumber));