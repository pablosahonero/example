/**
 * Created by Pablo Sahonero on 3/6/2015.
 */
var getMessage = function ()
{
    var name = prompt("Enter your name");
    var age = prompt("Enter your age");

    if(age < 18 )
    {
        alert("You are too young");
    }
    else
    {
        alert("You are an adult");
    }
};

window.getMessage();

//var age = '';
function calculateAge(bornYear){
    console.log(arguments);
    var age = 2014 - bornYear;
    return age;
};


























