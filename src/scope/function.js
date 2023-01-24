function greeting() {  //  function scope sirve para definir variables en una funcion en especifico
    let userName = 'yo';   
    console.log(userName); // imprime yo

    if(userName === 'yo'){
        console.log(`Hola ${userName}`);
    }
}

greeting(); // hola + yo
console.log(userName);  // error porque no esta dentro de la funcion , no es globa 

