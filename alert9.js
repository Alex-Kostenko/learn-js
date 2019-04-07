var arg = +prompt("Введите arg?")
switch (arg) {
    case 0:
    case 1:
        alert('Один или ноль');

    case 2:
        alert('Два');
        break;

    case 3:
        alert('Никогда не выполнится');
        break;

    default:
        alert('Неизвестное значение: ' + arg)
}

/////////////////

let a = prompt('Your browser');
if (a == 'Chrome' || a == 'Firefox' || a == 'Safari' || a == 'Opera' || a == 'Chrome') {
    alert('Да, и эти браузеры мы поддерживаем');
} else if (a == 'IE') {
    alert('О, да у вас IE!');
} else {
    alert('Мы надеемся, что и в вашем браузере все ок!');
}

/////////////////

var a = +prompt('a?', '');

switch (a) {
    case 0:
        alert(0);
        break;

    case 1:
        alert(1);
        break;

    case 2:
    case 3:
        alert("2 or 3");
        break;

    default:
        break;
}