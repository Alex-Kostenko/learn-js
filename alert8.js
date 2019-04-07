for (let x = 2; x <= 10; x++) {
    if (x % 2 == 0){
        console.log(x)
    }
}
///////////////////////

let y;

for (let x = 0; ; x++ ) {
    let y = prompt('input number > 100');
    if (y >= 100) {
        alert('good'); break;
    } else if (y === null) {
        alert('canceled'); break;
    } else {
        alert('so little');
    } 
}
////////////////////////

let y;

for (let x = 0; ; x++) {
    let y = prompt('input number > 100');
    if (y >= 100 || y === null) {
        alert('good'); break;
    } else {
        alert('so little');
    }
}


////////////////////////

var y;

do {
    y = prompt("input number > 100");
}
while (y <= 100 && y != null);

////////////////////////

nextPrime:
for (var i = 2; i <= 10; i++) {

    for (var j = 2; j < i; j++) {
        if (i % j == 0) continue nextPrime;
    }

    alert(i);
}