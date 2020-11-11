const number = 6;

function czyLiczbaParzysta (number) {
   if ( number % 2 === 0) 
      return 'liczba parzysta';
   else
      return 'liczba nieparzysta';
}  

console.log(czyLiczbaParzysta(number));