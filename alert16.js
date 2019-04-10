
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


//     classes.push(cls); // д√Ωобавить

//     obj.className = classes.join(' '); // и обновить свойство
// }

////////////////////////////


// var obj = {
//     className: 'open menu'
// };

// addClass(obj, 'new');
// addClass(obj, 'open');
// addClass(obj, 'me');
// alert(obj.className);

// function removeClass(obj, cls) {
//     let arr = Object.values(obj.className.split(' '));

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] == cls) {
//             arr.pop(cls);
//             i--;
//         }
//     }
//     obj.className = arr.join(' ').trim();
//     return obj;
// };

//////////////////////////////////

// let str = 'W-webkit-transition';

// function camelize (str) {

//     let arr = str.split('-');
//     var array = [];

//     for (var i = 0; i < arr.length; i++) {
//         var firstItem = arr[i].charAt(0);
//         var uppCase = firstItem.toUpperCase();
//         var fullStr = arr[i].substr(1);
//         let newArr = uppCase + fullStr;
//         array.push(newArr);
//         array[0] = array[0].toLowerCase();
//     }

//     console.log(array.join(''));
// }

// camelize (str);
////////////////////////

// var obj = {
//   className: 'open menu asd asd dfgkljdf sad sdhyfgb ljk'
// };

// var cls = 'asd';

// function removeClass(obj, cls) {

//     let itemObj = obj.className.split(' ');
//     console.log(itemObj);

//     for (var i = 0; i < itemObj.length; i++) {
//         if (itemObj[i] == cls) {
//             itemObj.splice(i,1);
//             console.log(itemObj);
//         }
//     }  

//     obj.className = itemObj.join(' ');
//     console.log(obj.className);
// }

// removeClass(obj, cls);

///////////////////

// let arr = [195, 5, 3, 8, 1];
// let a = 2;
// let b = 5;



// function filterRangeInPlace(arr, a, b) {

//   for (var i = 0; i < arr.length; i++) {
//     var val = arr[i];
//     if (val < a || val > b) {
//       arr.splice(i--, 1);
//     }
//   }
//   alert(arr);

// }

// filterRangeInPlace(arr, a, b);

///////////////////

// let arr = [5, 2, 1, -10, 8];




// function filterRangeInPlace (arr) {
//     function compareNumeric(a, b) {
//       if (a > b) return 1;
//       if (a < b) return -1;
//     }
//     arr.sort(compareNumeric);

//     arr.reverse();

//     console.log(arr);


// }

// filterRangeInPlace(arr);

//////////////////////////

// var arr = ["HTML", "JavaScript", "CSS"];

// var arrSorted = arr.slice().sort();

// alert( arrSorted );
// alert( arr );

//////////////////////////

function compareAge(personA, personB) {
  return personA.age - personB.age;
}

var vasya = { name: "Вася", age: 23 };
var masha = { name: "Маша", age: 18 };
var vovochka = { name: "Вовочка", age: 6 };

var people = [ vasya , masha , vovochka ];

people.sort(compareAge);


for(var i = 0; i < people.length; i++) {
  alert(people[i].name); 
}

////////////////////////////
