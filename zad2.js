const number = 12;

function isNumerInRange(number) {
   if (( number >= -35 && number < 2) || (number > 11 && number <= 27))
      return true;
   else
      return false;
}

console.log(isNumerInRange(number));