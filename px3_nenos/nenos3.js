function suma(n1,n2){

		 resposta1=(parseInt(n1)+parseInt(n2));
		 return resposta1;
		}

function resta(n1,n2){

		 resposta2=(parseInt(n1)-parseInt(n2));
		 return resposta2;
		}

function multiplicacion(n1,n2){

		 resposta3=(parseInt(n1)*parseInt(n2));
		 return resposta3;
		}


var otra =1;

while (otra){

var n1= prompt("Dime un número");
var n2= prompt("Dime otro número");


suma(n1,n2);
resta(n1,n2);
multiplicacion(n1,n2);
alert("El resultado de la suma de los dos números que nos diste , es "+resposta1);
alert("El resultado de la resta de los dos números que nos diste , es "+resposta2);
alert("El resultado de la multiplicacion de los dos números que nos diste , es "+resposta3);


otra = confirm("Quieres jugar ?");

}