//alert("Hola , que te apetece hacer ?");
function kmam(){
	unidades=prompt("que cantidad quieres convertir");
	resultado1=(unidades*1000);
	alert(resultado1);
}

function GBaMB(){
	unidades=prompt("que cantidad quieres convertir");
	resultado2=(unidades*1024);
	alert(resultado2);
}



function dollaraeuros(){
	unidades=prompt("que cantidad quieres convertir");
	resultado3=(unidades*0.87);
	alert(resultado3);
}


document.write('<button onclick="kmam()">De km a M</button>');
document.write('<button onclick="GBaMB()">De GB a MB</button>');
document.write('<button onclick="dollaraeuros()">De $ a €</button>');


//resp=prompt("Pasa (1) km a m , (2) GB a MB , (3) $ a €");
//unidades=prompt("que cantidad quieres convertir");



// if(resp=="1")
// {
// 	sol=kmam(unidades);
// 	alert(sol)
// }
// if(resp=="2")
// {
// 	sol2=GBaMB(unidades);
// 	alert(sol2)
// }
// if(resp=="3")
// {
// 	sol3=dollaraeuros(unidades);
// 	alert(sol3)
// }