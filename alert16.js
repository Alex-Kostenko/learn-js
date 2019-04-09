
// function addClass(obj, cls) {
//     var classes;

//     if (obj.className) {
//        classes = obj.className.split(' ');
//     } else {
//         classes = [];
//     }

//     for (var i = 0; i < classes.length; i++) {
//         if (classes[i] == cls) return; 
//     }


//     classes.push(cls); // добавить

//     obj.className = classes.join(' '); // и обновить свойство
// }

////////////////////////////


var obj = {
    className: 'open menu'
};

addClass(obj, 'new');
addClass(obj, 'open');
addClass(obj, 'me');
alert(obj.className);

function removeClass(obj, cls) {
    let arr = Object.values(obj.className.split(' '));

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == cls) {
            arr.pop(cls);
            i--;
        }
    }
    obj.className = arr.join(' ').trim();
    return obj;
};
