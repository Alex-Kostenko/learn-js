function checkAge(age) {
    if (age > 18) {
        return true;
    } else {
        return confirm('Родители разрешили?');
    }
}

////////////////

function checkAge(age) {
    var age = age > 18 ? true :
        confirm('Родители разрешили?');
}

////////////////

function checkAge(age) {
    return age >= 18 || confirm('Родители разрешили?');
}

age = prompt('Age?')
checkAge(age);

/////////////////////////////////

function pow(x, n) {
    for (var i = 1; i < n; i++) {
        x *= x;
    }
    return x;
}

var x = prompt("x?", '');
var n = prompt("n?", '');

alert(pow(x, n));