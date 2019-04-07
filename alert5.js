var loginUser = prompt('What your name?');
console.log(loginUser);

// const isLogin = !!loginUser;
// console.log(isLogin);

if (loginUser=='admin') {
	var pass = prompt('Password?');

	if (pass=='Black overlord') {
		alert('Welcome!')
	} 
	else if (pass === null) {
		alert('canceled')
	}
		else {
			alert('Password wrong!!!')
		};

} else 	if (loginUser === null) {
	alert ('canceled')
	} 
	else {
		alert ('I dont know you!!!')
	};