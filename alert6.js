var a = +prompt("Input A");
var b = +prompt("Input B");

result = (a + b < 4) ? 'few' : 'lot';

alert(result);

//////////////////

var login = prompt('input status');
var message;

message = login == 'Vasul' ? 'Hi!' :
		  login == 'Captain' ? 'Welcome!!!' :
		  'No login';

alert(message);

////////////////////

var a = +prompt("Input A");

if (a == 0) {
	alert('0');
} else if (a >= 1){
	alert('>=1');
} else {
	alert('<=1');
}