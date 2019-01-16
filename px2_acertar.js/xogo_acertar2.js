// xenera un número aleatorio menor ca 1
var misterio = Math.random();

// o número será menor ca 10
misterio = misterio*10;

//redondeo para non ter decimais
misterio = Math.round(misterio)

document.write(misterio);

var escolle = prompt('Cal é  o número misterioso menor ca 10? ')


while (escolle!=misterio)

{

	
	
}


if (escolle == misterio)
{
	//alerta in
	alert("Moi ben, acertaches¡¡¡   PARABÉNS¡¡")
}
else if(escolle > misterio)
{

	alert("Non,o número misterio é menor que"+" "+escolle)
}
else if(escolle < misterio)
	{

	alert("Non, o número misterioso é maior que"+" "+escolle)

	}





numerito = 0;
while (numerito <=5){
	document.write(numerito + ' ');
	numerito++;
}

//exercicio 2

var comida = 'Pan con';
while (comida != 'nada') {
	document.write(comida+ ' ');
	comida  = prompt('Que vos apetece comer con pan?');
}