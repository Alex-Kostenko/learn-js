// var codes = {
//     "+7": "Россия",
//     "+38": "Украина",
//     "+1": "США"
// };

// for (var code in codes) {
//     var value = codes[code];
//     code = +code;

//     console.log(code + ": " + value);
// }

///////////////////////////

// function isEmpty() {
//   var menu = {
//     width: 300,
//     height: 200,
//     title: "Menu"
//   };

//   var counter = 0;

//   for (var key in menu) {
//     counter++;
//   }

//   if (counter > 1) {
//     alert(false);
//   } else {
//     alert(true);
//   }
  
// }

// isEmpty();

///////////////////////////

// function sum() {
//   var salaries = {
//     "Вася": 100,
//     "Петя": 300,
//     "Даша": 250,
//     "asd" : 354
//   };

//   var sum = 0;
//   for (var key in salaries) {
//     sum += salaries[key];
//   }
//   alert(sum + ' $');
// }

// sum();

///////////////////////////

// function sum() {
//   var salaries = {
//     "Вася": 100,
//     "Петя": 3555,
//     "Даша": 250,
//     "asd": 354
//   };

//   var counter = 0;

//   for (var key in salaries) {
//     counter++;
//   }

//   if (counter > 1) {
//     var sum = 0;
//     for (const key in salaries) {
//       if (sum < salaries[key]) {
//         sum = salaries[key];
//         var name = key;
//       }
      
//     }
//     alert(sum + ' $ ' + name );
//   } else {
//     alert('нет сотрудников');
//   }
// }

// sum();

/////////////////////////////


function multiplyNumeric( ) {

  function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }

  var salaries = {
    "Вася": 100,
    "Петя": 3555,
    "Даша": 250,
    "asd": 354,
    "title": "My menu"
  };

  for (var key in salaries) {
    if (isNumeric(salaries[key])) {
      salaries[key] = salaries[key] * 2;
      console.log(salaries[key]);
    }
  }
}

multiplyNumeric();

/////////////////////////////