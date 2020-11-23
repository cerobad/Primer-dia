"use strict"
/*
//Actividad de aprendizaje 1 - presentacion en Javascript
//Ejercicio a
alert("Bienvenido a mi pagina");
//Ejercicio b
var nombre = prompt("¿Como te llamas?");
//Ejercicio c

alert('Hola '+nombre+'\n'+'Encantado de conocerte')
console.log("hola ",nombre, 'encantado de conocerte');

//Actividad aprendizaje 1 - variables en javascript
//Ejercicio a
var x = 15;
var y = 25;

var z = x +y;

alert('La suma de '+x+' + '+y+ '= '+z);

//Ejercicio b
var Nombre = 'Juan', Apellido = 'Prezi', Edad = '29';
console.log(Nombre, ' ', Apellido, ' ', Edad);

//Actividad aprendizaje 1 - variables en javascript (2)

alert('Bienvenidos al curso Front End!\n"Curso Sass"\n "Curso Javascript"')*/

var edad = prompt("Introduce tu edad")

if (edad >= 18){
    console.log("puede conducir")
    alert("Puede conducir")

}
else {
    console.log("no puede conducir")
    alert("No puede conducir")

}
/*
var edad = 35;
var cantidad = '100';
var nuevaCantidad = Number(cantidad);
console.log(cantidad);
console.log(nuevaCantidad);
var cantidad2 = Number("100");
console.log(cantidad2);
parseInt(); //contierte un argumento de tipo texto string a entero
parseFloat();// convierte un argumento de tipo string a punto flotante
var valor1 = prompt("ingrese valor 1");
var valor2 = prompt("ingrese valor 2");
var suma = (parseInt(valor1))+parseInt(valor2);
//var suma = valor1 + valor2;// de esta manera se concatena el resultado
alert("la suma es: " + suma)
console.log(suma);*/




var nota1 = prompt("ingresa nota N°1");
var nota2 = prompt("ingresa nota N°2");
var nota3 = prompt("ingresa nota N°3");

var promedio = (parseFloat(nota1)+parseFloat(nota2)+parseFloat(nota3))/3;

alert("el promedio es :"+ promedio)


if (promedio >= 4.0){

    console.log("Estudiante aprobado");
    alert("Estudiante aprobado");
}
else{
    console.log("Estudiante reprobado");
    alert("Estudiante reprobado");
}



