function sumTo(n) {
    
    let sumNumber = 0;

    for (let i = 0; i <= n; i++) {
        sumNumber += i;
    }

    return sumNumber;

}

/////////////////////

function sumTo(n) {

    let sumNumber = 0;
    if (n == 1) return 1;
        return n + sumTo(n-1);

}

/////////////////////

function sumTo(n) {
    return n*(n+1)/2;
}

/////////////////////////////////////

function factorial(n) {
    if ( n != 1) {
        return n * factorial(n-1);
    } else {
        return 1;
    }
}


/////////////////////////////////////


function fib(n) {
    var a = 1,
        b = 1;
    for (var i = 3; i <= n; i++) {
        var c = a + b;
        a = b;
        b = c;
    }
    return b;
}

/////////////////////////////////////
n = +prompt('Input sum: ');
alert(fib(n));