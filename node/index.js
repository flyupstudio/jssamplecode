var calculator = require('./calculator');
calc(123);
calc("444+444444");
calc("444+hello world");
function calc(value){
	try{
		if(typeof(value) == 'string'){		
			console.log(calculator(value));
		}else{
			console.log('TypeError: Expression should be a string.');
		}
		
	}catch(e){
		console.log('Error: "'+value+'" is not valid expression.');
	}
}