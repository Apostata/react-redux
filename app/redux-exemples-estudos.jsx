var redux = require('redux');

console.log('Start Redux Examples');

//pure function
function add(a, b){
	return a + b;
}


//not a pure function
var a = 3;
function add (b){
	return a + b;
}

//not a pure function
var result;
function add (b){
	result = a + b;
	return result;
}

//not a pure function
function add(a, b){
	return a + b + new Date().getSeconds();
}

//Pure function
function changeProp(obj){
	
	return{
		...obj,
		name:'Erica'
	}
}

var startingValue = {
	name:'Rene',
	age:32
};

var res = changeProp(startingValue);

console.log(startingValue);
console.log(res);

/* Pure functions
1 - mesma saida com a mesma entrada de dados
2 - não deve atualizar variaveis globais ou fora da função
3 - sincronas, não utiliza callbacks ou promises
*/