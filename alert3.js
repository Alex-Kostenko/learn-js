var year = prompt('В каком году появилась спецификация ECMA-262 5.1?', '');

// if (year == 2011) 
// 	{alert( 'yes :)')}
// 	else {
// 	alert('not :(');
// }

year = 	year == 2011 ? 'yes :)' : 
		year < 2011 ? 'smoll' :
		'big';


alert(year);