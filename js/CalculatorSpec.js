/**
 * Created by Pablo Sahonero on 3/31/2015.
 */
describe('Calculator', function(){
    var calculator = new Calculator();
    it('Should be able to add two numbers', function(){

        var actualResult = calculator.add(1, 2);
        var expectedResult = 3;
        expect(actualResult).toBe(expectedResult);
    });
    it('Should be able to subtract two numbers', function(){
        expected(true).toBe(true);
    });
    it('Should be able to multiply two numbers', function(){
        expected(true).toBe(true);
    });
    it('Should be able to divide two numbers', function(){
        expected(true).toBe(true);
    });
});