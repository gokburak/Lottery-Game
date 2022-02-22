
//         let inputNumber = document.getElementById('input');
// let btn = document.getElementById('button');
// let res = document.getElementById("result");


// btn.addEventListener('click', function () {
//     res.innerHTML = "";

//     var numbers = [];

//     for (let i = 0; i < inputNumber.value; i++) {
//         for (var j = 0; numbers.length < 6; j++) {
//         let number = Math.floor(Math.random() * 90) + 1;
//         if(numbers.indexOf(number) === -1) {
//             numbers.push(number);
//         }
//     }

// let sorted = numbers.sort((a,b) => a - b)

// for (var k = 0; numbers.length < 7; k++) {
//     let number = Math.floor(Math.random() * 90) + 1;
//     if(numbers.indexOf(number) === -1) {
//       numbers.push(number);
//     }
//   }
//   numbers.push(Math.trunc(Math.random() * 90) + 1);

// res.innerHTML += sorted[0]+ '-' + sorted[1]+ '-' + sorted[2]+ '-' + sorted[3]+
//  '-' + sorted[4]+ '-' + sorted[5]+ ' |     ' + numbers[6]+ '   |   ' + numbers[7] + '<br>';

// res.innerHTML += '<hr>';
// numbers = []
        
//     }


// });
    
let inputNumber = document.getElementById("input");
let buton = document.getElementById("button");
let result = document.getElementById("result")

buton.addEventListener('click', function () {  
    result.innerHTML = "";

     var numbers = [];

     for (let i = 0; i < inputNumber.value; i++) {
         for (var j = 0; numbers.length < 6; j++) {       
          let number = Math.floor(Math.random() * 90) + 1;
         if(numbers.indexOf(number) === -1) {
            numbers.push(number);
        }
    }

let sorted = numbers.sort((a,b) => a - b)

 for (var k = 0; numbers.length < 7; k++) {
    let number = Math.floor(Math.random() * 90) + 1;
     if(numbers.indexOf(number) === -1) {
       numbers.push(number);
     }
 }
   numbers.push(Math.trunc(Math.random() * 90) + 1);

   result.innerHTML += sorted[0]+ '-' + sorted[1]+ '-' + sorted[2]+ '-' + sorted[3]+ '-' + sorted[4]+ '-' + sorted[5]+ ' |     ' + numbers[6]+ '   |   ' + numbers[7] + '<br>';

result.innerHTML += '<hr>';
 numbers = []
        
     }


 });





















