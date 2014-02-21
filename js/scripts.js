
   function factorialNum(num){
    if (num === 0)
      { return 1; }
    else
      {return num * factorialNum( num - 1 );} 
};


// var factorialNum = function(number) {
//   var result = 1;
//   for(var i = number; i > 0; i--) {
//     result *= i;
//   }
//   return result;
// };

// $(document).ready(function(){
//   var input = prompt("Type a number to be factorialed!");
//   var finalResult = factorialNum(input);
//   $("#result").text(finalResult);
// });
