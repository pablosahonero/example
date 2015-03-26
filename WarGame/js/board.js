/**
 * Created by Pablo Sahonero on 3/23/2015.
 */
var Board = function(id, size, ships)
{
    var _id = id;
    var _size = size;
    var _ships = ships;
    var _matrix = new Array();

    this.getMatrix = function(){
        return _matrix;
    };

    //displays the Board on the console
    this.displayBoard = function (){
        for(var i = 0; i < size; i++)
        {
            var column = _matrix[i];

            for(var j = 0; j < size; j++)
            {
                console.log("|" + column + "|");
            };
        };
    };

    //verifies the size of the ship
    this.setSize = function(size)
    {
        _size = size;
    };

    this.addShip = function(ship)
    {
        _ships.push(ship);
    };

    //initializes the board matrix with the respective size
    this.initializeMatrix = function ()
    {
        for(var i = 0; i < size; i++)
        {
            var column = new Array();
            for(var j = 0; j < size; j++)
            {
                column.push(0);
            };
            _matrix.push(column);
        };
    };
};