var valor
var resultado

function botao(num) {
	valor = document.calc.visor.value += num
}

function calcula() {
	resultado = eval(valor)
	document.calc.visor.value = resultado.toLocaleString('pt-br')
}

function onlynumber(evt) {
	var theEvent = evt || window.event;
	var key = theEvent.keyCode || theEvent.which;
 
	key = String.fromCharCode( key );
	var regex = /^[0-9.]+$/;
	if( !regex.test(key) ) {
	   theEvent.returnValue = false;
	   if(theEvent.preventDefault) theEvent.preventDefault();
	}
 }