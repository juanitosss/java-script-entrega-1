let nombre1 = prompt("ingresa tu nombre")
let apellido = prompt("ingresa tu apellido")
let edad2 = parseFloat(prompt("ingresa tu edad"))


function datos(nombre1 = "juan", apellido = "vazquez" , edad2 = 20){
    console.log("el nombre es " , nombre1 + apellido + edad2)
}

datos("" , nombre1 , apellido + "y su edad es " + edad2)

let tablaDelcinco = 5;
for(let i = 1; i <=10; i++){
    let resultado = tablaDelcinco * i ;
    console.log( tablaDelcinco + "x" + i + "=" + resultado);
}

let clave;
do{
    clave = prompt('Ingresa la contraseña')
    } while (clave !== '1234');
    alert("contraseña correcta")