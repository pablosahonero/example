/**
 * Created by Pablo Sahonero on 3/23/2015.
 */

/**
 * This class represents a Boards that is being used in the game
 * @param represents the Board identification
 * @param represents the Board size
 */
var Board = function(id, size)// be careful with the size parameter
{

    /**
     * identification of the Game
     * @type {number}
     */
    var _id = id;

    /**
     * the Player associated to the current Board
     * @type {Player}
     */
    var _player = new Player(_id);

    /**
     * The length of the board
     * @type {number}
     */
    var _size = size;

    /**
     * the matrix that represents the Positions of the Board
     * @type {Array}
     */
    var _matrix = new Array();


    /**
     * This function returns the Board's Matrix
     * @return {Array}
     */
    this.getMatrix = function(){
        return _matrix;
    };

    /**
     * This function create the Ships of the Player, initializes the matrix and
     * locates the Ships on the Board
     *
     */
    this.initializeBoard = function(){
        _player.createShips();
        this.initializeMatrix();
        this.locateShips(_player.getShips());
    };

    /**
     * This function initializes all the positions of the matrix to FREE_SPACE
     *
     */
    this.initializeMatrix = function(){
        for(var i = 0; i < size; i++){
            _matrix.push(new Array());
            for(var j = 0; j < size; j++){
                _matrix[i].push(CONST.get('FREE_SPACE'));
            };
        };
    };

    /**
     * This function locates the Ship in the Board
     *
     */
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

    /**
     * This function display the Board, the Ship and the Shots
     *
     */
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