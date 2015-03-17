/**
 * Created by Pablo Sahonero on 3/12/2015.
 */
var doOperations= function  ()
{
    var array = prompt("Enter values with the following format: 1,2,3...").split(",");
    var number = new Array();

    array.forEach(function(entry) {
        number.push(parseInt(entry))
    });

    alert('The Minimum Number is: ' + getMin(number));
    alert('The Maximum Number is: ' + getMax(number));
    alert('The Average is: ' + getAvg(number));
    alert('The Sum is: ' + getSum(number));
};

var getMin = function(number,pos,min)
{
    if(pos== undefined)
        pos=number.length-1;
    if(min==undefined)
        min=number[pos];

    if (pos==0)
        return min;

    if (min>number[pos-1])
        min=number[pos-1];

    return getMin(number,pos-1,min);
};

var getMax=function(number,pos,max){

    if(pos== undefined)
        pos=number.length-1;
    if(max==undefined)
        max=number[pos];

    if (pos==0)
        return max;

    if (max<number[pos-1])
        max=number[pos-1];

    return getMax(number,pos-1,max);
};

var getSum =function(numbers, pos)
{
    if(pos== undefined)
        pos=numbers.length-1;

    if (pos==0)
        return numbers[pos];

    return numbers[pos] + getSum(numbers,pos-1);
};

var getAvg =function(numbers, pos)
{
    if(pos== undefined)
        pos=numbers.length-1;

    if (pos==0)
        return numbers[pos]/numbers.length;

    return numbers[pos]/numbers.length + getAvg(numbers,pos-1);
};



//pepe = {name : "Pepe"}

