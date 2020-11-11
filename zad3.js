let result = 2;

function examResult(result) {
   switch (result) {
      case 0: 
        console.log ('egzamin do poprawy');
        break;
      case 1: 
        console.log ('zdałeś egzamin');
        break;
      case 2: 
        console.log ('zaliczona tylko teoria');
        break;
      case 3: 
        console.log ('zaliczona tylko praktyka');
        break;
      default: 
        console.log ('podałeś złą liczbę');
   }
}

examResult(result);