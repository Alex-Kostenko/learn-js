// var fruits = ["Яблоко", "Груша", "Слива"];

// function multiplyNumeric(fruits) {

//   var lastItems = fruits.length-1;
  
//   return fruits[lastItems];

// }

// alert( multiplyNumeric(fruits) );

////////////////////////////////////////

// var fruits = ["Яблоко", "Груша", "Слива"];

// function multiplyNumeric(array) {

//   array.push("Компьютер");
//   return array;

// }

// alert(multiplyNumeric(fruits));

////////////////////////////////////////

// var styles = ["Джаз", "Блюз"];

// function multiplyNumeric(array) {

//   array.push("Рок-н-Ролл");

//   var lastItems = array.length - 2;
//   array[lastItems] = "Классика";

//   array.shift();

//   array.unshift('Рэп','Регги');

//   return array;

// }

// alert(multiplyNumeric(styles));

////////////////////////////////////////

// var arr = ["Яблоко", "Апельсин", "Груша", "Лимон", "Джаз", "Блюз", "Классика", 'Рэп', 'Регги'];

// function randItem(array) {

//   const firstItems = 0;
//   var lastItems = array.length;

//   function getRandomInt(firstItems, lastItems) {
//     return Math.floor(Math.random() * (lastItems - firstItems)) + firstItems;
//   }
//   for (let i = 0; i < array.length; i++) {
//     console.log(array[getRandomInt(firstItems, lastItems)])
//   }
  
// }

// randItem(arr);

////////////////////////////////////////

// function calc() {
//   let arr = [];
//   let value;

//   do {
//     let promptedValue = prompt('Input value');
//     value = +promptedValue;
//     arr.push(value);
//   } while (value !== '' || value === null || isNaN(value));

//   var sum = 0;
//   for (var i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   // for (var i; i<arr.length; i++) {
//   //   if (arr[key] < sum) {
//   //     sum += arr[key];
//   //     console.log(arr[key]);
//   //   }
//   // }
//   console.log(sum);
//   console.log(arr);
// }

// calc();

////////////////////////////////////////

// var numbers = [];

// while (true) {

//   var value = prompt("Введите число", 0);

//   if (value === "" || value === null || isNaN(value)) break;

//   numbers.push(+value);
// }

// var sum = 0;
// for (var i = 0; i < numbers.length; i++) {
//   sum += numbers[i];
// }

// alert(sum);

/////////////////////////////////////

var arr = [1,2,3,4,5,6,7,8,9,0];
var valuee = 6;

function find(array, value) {
  if (array.indexOf) {
    return array.indexOf(value);
  }

  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) return i;
  }

  return -1;
}

alert(find(arr, valuee));

////////////////////////////////