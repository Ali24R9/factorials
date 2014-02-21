describe('factorialNum', function() {
  it('multiplies a number by all of the positive integers less than that number', function(){
    factorialNum(5).should.equal(120);
  });

  it('defines 0! as equal to 1', function(){
  factorialNum(0).should.equal(1);
  });
});



// describe('function name', function() {
//   it('what you want the function to do', function() {
//     caps("input").should.equal("output");
//   });
// });
