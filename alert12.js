// function validation(str) {
//   var str ='name';

//   if (!str) {
//       return str;
//   } else {
//       return str[0].toUpperCase() + str.slice(1);
//   }
// }

// console.log(validation());

//////////////////////////

// var str = 'buy ViAgRA now XxX';

// function checkSpam(str){

//     var lowCase = str.toLowerCase();

//     var search1 = lowCase.indexOf('viagra');
//     var search2 = lowCase.indexOf('xxx');

//     if (search1 >= 0 || search2 >= 0) {
//         alert('bad');
//   } else {
//         alert('good')
//   }
// }

// console.log(checkSpam(str));

/////////////////////////////

// var str = 'buy ViAgRA now XxXbuy ViAgRA now XxXbuy ViAgRA now XxXbuy ViAgRA now XxXbuy ViAgRA now XxXbuy ViAgRA now XxX';
// var maxlength = 20;

// function truncate(str, maxlength) {
//     if (str.length > maxlength) {
//         return str.substring(0, maxlength) + "...";
//     } else {
//         return str;
//     }
// }

// alert(truncate(str, maxlength));

///////////////////////////////

var str = '$120';

function extractCurrencyValue(str) {
    return parseInt(str.replace(/[^\d]/g, ''));
}

str = extractCurrencyValue(str);
alert(str);