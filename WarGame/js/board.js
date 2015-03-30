/**
 * Created by Pablo Sahonero on 3/23/2015.
 */
var Board = function(id, size)// be careful with the size parameter
{
    var _id = id;
    var _player = new Player(_id);
    var _size = size;
    var _matrix = new Array();

    this.getMatrix = function(){
        return _matrix;
    };

    this.initializeBoard = function(){
        _player.createShips();
        this.initializeMatrix();
        this.locateShips(_player.getShips());
    };

    this.initializeMatrix = function(){
        for(var i = 0; i < size; i++){
            _matrix.push(new Array());
            for(var j = 0; j < size; j++){
                _matrix[i].push(CONST.get('FREE_SPACE'));
            };
        };
    };

    this.locateShips = function(array){
        var ships = array;
        for(var i = 0; i < ships.length; i++){
            var ship = ships[i];
            for(var j = 0; j < ship.getLocation().length; j++){
                var position = ship.getLocation()[j];
                _matrix[position.getX()][position.getY()] = CONST.get('SHIP_SPACE');
            };
        };
    };

    this.displayBoard = function(){
        _player.displayPlayer();
        for(var i = 0; i < _size; i++){
            console.log('Row ' + i + ':');
            for(var j = 0; j < _size; j++){
                console.log('|'+ _matrix[i] + '|');
            };
        };
    };
};