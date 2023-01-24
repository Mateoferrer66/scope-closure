//var no funciona con block scope

function fruits() {
    if (true){
        var one = 'a'; //function scope
        let two = 'b';  //block scope
        const three = 'c'; //block scope
        console.log(two); //al estar en el bloque si imprime
        console.log(three);//al estar en el bloque si imprime
    }       
    console.log(one); //al ser var no importa por ser global
    console.log(two);//error porque esta fuera de bloque
    console.log(three); //error porque esta fuera de bloque 
}

fruits();