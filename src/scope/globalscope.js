// varibles

var a; //declarar
var n = 'n' // declarar y asignar

var a = 'aa'; // redeclaracion
n = 'nn' //reasignacion

//Global scope

var fruit = 'Apple';//global sirve afuera y adentro de una funcion
console.log(fruit);
function bestFruit() {
    console.log(fruit);//imprime apple dos veces
}
bestFruit();

function countries(){
    country = 'Colombia';
    console.log(country);
}

countries();
console.log(country); m//evitar rear variables globales por error sin  usar var let y const
