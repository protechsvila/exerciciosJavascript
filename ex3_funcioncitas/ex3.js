// function despedir(){

// 	alert("adeus")


// }

// despedir();

// function subir10nivel(x){

// 	resultado=x+10;
// 	return resultado;

// }

// solucion=subir10nivel(7);
// 		 alert(solucion);



n1_user= prompt("Dime tu nota 1");
n2_user= prompt("Dime tu nota 2");

function media(n1,n2){

		 resposta=(parseInt(n1)+parseInt(n2))/2;
		 return resposta;
		 alert(resposta);
		}

media(n1_user,n2_user);





















// /* 
// 	Código en JavaScript
// 	Nome do ficheiro: ex3.js
// 	Usado: function
// */

// /*	
// 	Función sen parámetros
// */
// function saudar () {
// 	var dato='todos';
// 	alert('Moi boas a '+ dato);
// }


// /*	
// 	Función á que lle pasamos un parámetro e fai o que lle pedimos
// */
// function cotillear(algo) {
// 	document.write('<br> Que tal estás '+ algo);
// }

// /*	
// 	Función á que lle pasamos dous parámetros e devolve un valor
// */
// function calcularMedia(n1,n2) {
// 	final=(n1+n2)/2;
// 	return final
// }


// document.write('<img src="../logo.png" alt="Algo falla no logo">');
// document.write('<h1>Traballamos con funcións</h1>');

// document.write('Algunhas veñen predefinidas: <code>alert(), prompt(), parseInt()</code> <br>');
// document.write('Outras están na biblioteca <i>Math</i> como <code>Math.random(), Math.round()</code> <br>');
// document.write('<hr>Podemos definir nós mesmos funcións: <code>saudar(), cotillear(), calcularMedia()</code><br>');
// document.write('O resultado das chamadas será:  <hr>');


// //chamada á función saudar()
// saudar();

// document.write('Chamada á función <code>cotillear()</code><br>');
// cotillear('Mari');
// cotillear('Toni');
// cotillear('Xan');

// document.write('<hr>Chamada á función <code>calcularMedia()</code>');
// var nota=calcularMedia(5,4);
// document.write('<br> A túa nota final é... '+ nota);