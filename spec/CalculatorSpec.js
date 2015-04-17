/**
 * Created by Pablo Sahonero on 3/31/2015.
 */
describe('Calculator', function(){

    var calculator;
    beforeEach(function(){
        calculator = new Calculator();
    });

    afterEach(function(){
        calculator = null;
    });

    describe('Memory', function(){
        beforeEach(function(){
            calculator.cleanMemory();
        });
        it('Should be able to store previous operation results in the Memory', function(){
            calculator.add(4, 6);
            calculator.multiply(5);
            calculator.divide(10);
            var actualResult = calculator.subtract(1);

            var expectedResult = 4;
            expect(actualResult).toBe(expectedResult);
        });

        it('Should be able to delete its stored Memory', function(){
            calculator.add(4, 6);
            calculator.multiply(5);
            calculator.divide(10);
            calculator.subtract(1);
            calculator.cleanMemory();
            var actualResult = calculator.getMemory();

            var expectedResult = 0;
            expect(actualResult).toBe(expectedResult);
        });

    });

    describe('Addition', function(){
        it('Should be able to add two numbers', function(){
            var actualResult = calculator.add(1, 2);
            var expectedResult = 3;
            expect(actualResult).toBe(expectedResult);
            expect(calculator.add(3,2)).toBe(5);
        });

        it('Should be able to add one number to the stored memory', function(){
            calculator.add(1, 2);
            var actualResult = calculator.add(5);
            var expectedResult = 8;
            expect(actualResult).toBe(expectedResult);
        });

        it('Should not be able to add letters', function(){
            expect(function(){calculator.add("r",5);}).toThrow("Error: Please don't enter alphabetical characters");
        });

        it('Should not be able to add decimals', function(){
            expect(function(){calculator.subtract(5.5,5);}).toThrow("Error: Please don't enter decimal values");
        });
    });

    describe('Subtraction', function(){
        it('Should be able to subtract two numbers', function(){
            var actualResult = calculator.subtract(8, 6);
            var expectedResult = 2;
            expect(actualResult).toBe(expectedResult);
        });

        it('Should be able to subtract one number to the stored memory', function(){
            calculator.subtract(10, 2);
            var actualResult = calculator.subtract(5);
            var expectedResult = 3;
            expect(actualResult).toBe(expectedResult);
        });

        it('Should not be able to subtract letters', function(){
            expect(function(){calculator.add("r",5);}).toThrow("Error: Please don't enter alphabetical characters");
        });

        it('Should not be able to subtract decimals', function(){
            expect(function(){calculator.subtract(5.5,5);}).toThrow("Error: Please don't enter decimal values");
        });
    });

    describe('Multiplication', function(){
        it('Should be able to multiply two numbers', function(){
            var actualResult = calculator.multiply(2, 2);
            var expectedResult = 4;
            expect(actualResult).toBe(expectedResult);
        });

        it('Should be able to multiply one number by the stored memory', function(){
            calculator.multiply(10, 2);
            var actualResult = calculator.multiply(2);
            var expectedResult = 40;
            expect(actualResult).toBe(expectedResult);
        });

        it('Should not be able to multiply letters', function(){
            expect(function(){calculator.add("r",5);}).toThrow("Error: Please don't enter alphabetical characters");
        });

        it('Should not be able to multiply decimals', function(){
            expect(function(){calculator.subtract(5.5,5);}).toThrow("Error: Please don't enter decimal values");
        });
    });

    describe('Division', function(){
        it('Should be able to divide two numbers', function(){
            var actualResult = calculator.divide(8, 2);
            var expectedResult = 4;
            expect(actualResult).toBe(expectedResult);
        });

        it('Should be able to divide the stored memory by one number', function(){
            calculator.divide(100, 2);
            var actualResult = calculator.divide(25);
            var expectedResult = 2;
            expect(actualResult).toBe(expectedResult);
        });

        it('Should not be able to divide a number by 0', function(){
            expect(function(){calculator.divide(5, 0);}).toThrow("0 is an Invalid Divisor");
        });

        it('Should not be able to divide letters', function(){
            expect(function(){calculator.add("r",5);}).toThrow("Error: Please don't enter alphabetical characters");
        });

        it('Should not be able to divide decimals', function(){
            expect(function(){calculator.subtract(5.5,5);}).toThrow("Error: Please don't enter decimal values");
        });
    });

});