/**
 * Created by Pablo Sahonero on 3/17/2015.
 */
var getDate = function()
{
    var now = new Date();

    var week = {
        "days" : ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    };

    var hour = now.getHours() > 12 ? (now.getHours() - 12) + 'PM': now.getHours() + 'AM';


    alert("Today is : " + week.days[now.getDay()] + "\n Current Time is : " + hour + " : "+ now.getMinutes() + " : " + now.getSeconds() );
};

var validateDate = function ()
{
    var re = new RegExp(/^[0-9]{4}-0[1-9]{1}|1[0-2]{1}-[0-9]{2}$/)
};