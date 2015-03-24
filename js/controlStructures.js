/**
 * Created by Pablo Sahonero on 3/19/2015.
 */
var getFirstCapicua = function(init, limit)
{
    var i = init;
    var found = false;

    while(i <= limit && !found)
    {
        if(i == getReverse(i))
        {
            return i;
        }
        i++;
    }
};

var getReverse = function(number)
{
    var array = number.toString().split('');
    var inverseArray = array.reverse();
    return parseInt(inverseArray.toString().replace(/,/g, ""));
};

var getEvenNumbers = function(n)
{
    var i = 2;
    while(i <= n)
    {
        if(isEvenNumber(i))
        {
            console.log(i);
        }
        i++;
    }
};

var isEvenNumber = function(n)
{
    return n % 2 == 0;
};



