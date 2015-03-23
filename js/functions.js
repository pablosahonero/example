/**
 * Created by Pablo Sahonero on 3/20/2015.
 */
(function(name, lastname)
{
    console.log('Hello ' + name + ' ' + lastname);
})('Leo', 'Sanga');

var Person = function(name, age)
{
    var _name = name;
    var _age = age;

    this.getAge = function(){
        return _age;
    };

    this.getHistory = function ()
    {
        console.log(_name + ' is ' + _age + ' years old');
    };

    this.setAge = function(newAge){
        _age = newAge;
    };
};

var pepe = new Person('Pepe', 12);
pepe.getAge();
pepe.getHistory();

pepe.setAge(19);
pepe.getHistory();

pepe.age = -13;
pepe.getHistory();