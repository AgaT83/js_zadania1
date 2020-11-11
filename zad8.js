let printer = {
    cyan: 5,
    magenta: 1,
    yellow: 1
} 

function inkLevels (printer){
    if (printer.cyan <= printer.magenta && printer.cyan <= printer.yellow ) 
       return printer.cyan;
    else if (printer.magenta <= printer.cyan && printer.magenta <= printer.yellow ) 
        return printer.magenta;
    else 
        return printer.yellow;
}

console.log(inkLevels(printer));