/**
 * Created by Pablo Sahonero on 3/6/2015.
 */
var getMessage = function ()
{
    var name = prompt("Enter your name");
    var age = prompt("Enter your age");

    if(age < 18 )
    {
        alert(name + ", you are too young");
    }
    else
    {
        alert(name + ", you are an adult");
    }
};
