/**
 * Created by Pablo Sahonero on 4/9/2015.
 */

/**
 * It is a class that represents a Calculator
 */
var  Calculator = function (){
    /**
     * Represents the calculator memory
     * @type {number}
     */
    var _memory = 0;


    /* Returns the calculator memory
    * @return {number}
    */
    this.getMemory = function(){
        return _memory;
    };

    /* Returns the addition of two numbers
     * @return {number}
     */
    this.add = function (a,b){
        var result = 0;
        if(typeof a == "string" || typeof b == "string")
        {
            throw("Error: Please don't enter alphabetical characters");
        };

        if(isDecimal(a) || (b != undefined && isDecimal(b)))
        {
            throw("Error: Please don't enter decimal values");
        };

        if(b == undefined){
            result = a+_memory;
            _memory = a+_memory;
        }
        else
        {
            result = a+b;
            _memory = a+b;
        };
        return result;
    };

    /* Returns the subtraction of two numbers
     * @return {number}
     */
    this.subtract = function (a,b){
        var result = 0;
        if(typeof a == "string" || typeof b == "string")
        {
            throw("Error: Please don't enter alphabetical characters");
        };

        if(isDecimal(a) || (b != undefined && isDecimal(b)))
        {
            throw("Error: Please don't enter decimal values");
        };

        if(b == undefined){
            result = _memory-a;
            _memory = _memory-a;
        }
        else
        {
            result = a-b;
            _memory = a-b;
        };
        return result;
    };

    /* Returns the multiplication of two numbers
     * @return {number}
     */
    this.multiply = function (a,b){
        var result = 0;
        if(typeof a == "string" || typeof b == "string")
        {
            throw("Error: Please don't enter alphabetical characters");
        };

        if(isDecimal(a) || (b != undefined && isDecimal(b)))
        {
            throw("Error: Please don't enter decimal values");
        };

        if(b == undefined){
            result = _memory*a;
            _memory = _memory*a;
        }
        else
        {
            result= a*b;
            _memory = a*b;
        };
        return result;
    };

    /* Returns the divisionn of two numbers
     * @return {number}
     */
    this.divide = function (a,b){
        var result = 0;
        if(typeof a == "string" || typeof b == "string")
        {
            throw("Error: Please don't enter alphabetical characters");
        };

        if(isDecimal(a) || (b != undefined && isDecimal(b)))
        {
            throw("Error: Please don't enter decimal values");
        };

        if(b==0)
        {
            throw("0 is an Invalid Divisor");
        };
        if(b == undefined){
            if(a==0)
            {
                throw("0 is an Invalid Divisor");
            };
            result = _memory/a;
            _memory = _memory/a;
        }
        else
        {
            result = a/b;
            _memory = a/b;
        };
        return result;
    };

    /* Returns true if the value a is decimal
     * @param n represents n to be verified
     * @return {bool}
     */
    var isDecimal = function (n){
        var flag = n%1 != 0? true:false;
        return flag;
    };

    /* Cleans the memory setting it to '0'
     */
    this.cleanMemory = function(){
        _memory = 0;
    };
};