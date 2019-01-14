/* 
	Código en JavaScript
	Nome do ficheiro: ex1.js
	Usado: prompt(), alert(),document.write(), confirm(), if-else
*/

// preguntamos un dato con prompt() e mostrámolo con alert()
var dato; //declaramos unha variable para gardar a resposta
dato = prompt('Cual es tu nombre?');

var dato2
dato2 = prompt("Cual es tu apellido?");
alert("Encantado " + dato +" "+ dato2)

// o navegador sabe HTML:
document.write('<img src="../logo.png" alt="Algo falla no logo">');
document.write('<h1>Hello there ¡¡¡</h1>'); // podemos inserir HTML
document.write('Vamos a probar esta vaina. '); //non fai caso dos saltos de liña
document.write('Parece que todo va bien , pero es porque no he modificado muchas cosas. : <br>');
document.write('Vamos a meter un Hr ;) <hr>');

// confirm() mostra cadro de diálogo OK ou Cancel:
var marchamos= confirm('Esto es muy aburrido , mejor nos vamos ? ');

if(marchamos)
{
	document.write('<br> Saluditooos '+ dato);
} 
else 
{
	document.write('<br> Bueeeno ,entonces continuamos '+ dato + " "+dato2);
}