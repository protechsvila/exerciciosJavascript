/* 
	Código en JavaScript
	Nome do ficheiro: ex2.js
	Usado: parseInt(), Math.random(), Math.round()
*/

document.write('<img src="../logo.png" alt="Algo falla no logo">');
document.write('<center><h1>Suma de los productos</h1></center>')

// as variables decláranse
var num1; 
var num2;
var num3;

// pregunto o valor ó usuario; Javscript considéraos caracteres, non números
num1 = prompt('Precio producto 1 ');
num2 = prompt('Precio producto 2 ');
num3 = prompt('Precio producto 3 ');

// convertimos a números
var solucionado = parseFloat(num1)+parseFloat(num2)+parseFloat(num3);



document.write('<center><h2>Total a pagar:</h2></center>')
document.write("producto1"+"<center>"+num1+"</center>")
document.write("producto1"+"<center>"+num2+"</center>")
document.write("producto1"+"<center>"+num3+"</center>")
document.write("<br>")
document.write("<br>")

document.write("total"+"<center>"+solucionado+"</center>")