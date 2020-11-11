let phValue = 8.7;

function phName(phValue) {    
  switch(true) {
    case (phValue >= 0 && phValue < 7):
        return 'kwaśna';
    
    case  (phValue > 7 && phValue <= 14):
        return 'zasadowa';

    case (phValue == 7):
        return 'obojętna';

    default:
        return 'nieprawidłowy';
  }
}

console.log(phName(phValue)); 