/**
 * Created by Pablo Sahonero on 3/23/2015.
 */

/**
 * This class represents a Boards that is being used in the game
 * @param id represents the Board identification
 */

var drawField = function(x){
    var table = $('<table> </table>');
    var row = $('<tr></tr>');
    row.append('<td></td>');
    row.append('<td></td>');
    row.append('<td></td>');
    table.append(row);

    var row1 = $('<tr></tr>');
    row1.append('<td></td>');
    row.append('<td></td>');
    row.append('<td></td>');
    table.append(row);

    var row = $('<tr></tr>');
    row.append('<td></td>');
    row.append('<td></td>');
    row.append('<td></td>');
    table.append(row);



};





var Board = function(id)// be careful with the size parameter
{
    /**
     * identification of the Game
     * @type {number}
     */
    var _id = id;

    /**
     * this is an array for ships,
     * @type {array}
     */

    var _ships = new Array();

    /**
     * The length of the board
     * @type {number}
     */
    var _size = CONST.get('BOARD_SIZE');

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
        this.createShips();
        this.initializeMatrix();
        this.locateShips(_ships);
    };

    /**
     * This function initializes all the positions of the matrix to FREE_SPACE
     * not need the parameter
     */
    this.initializeMatrix = function(){
            for(var i = 0; i < _size; i++){
                _matrix.push(new Array());
                for(var j = 0; j < _size; j++){
                    _matrix[i].push(CONST.get('FREE_SPACE'));
                };
            };
    };

    /**
     * This function locates the Ship in the Board,
     * need the parameter array
     * work with the constant : SHIP_SPACE
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
     */
    this.displayBoard = function(){
        for(var i = 0; i < _size; i++){
             console.log(i + '. |'+ _matrix[i] + '|');
        };
    };

    /**
     * This function create the ships with the constant "Ship_Number"
     * and not need the parameters
     */
    this.createShips = function(){
        for(var i = 0; i < CONST.get('SHIPS_NUMBER'); i++){
            var ship = new Ship();
            ship.initializeShip();
            _ships.push(ship);
        };
    };

    /**
     * This function locate the shot with constants: 'SHOT_SPACE' and DAMAGED
     * need the parameters x and y
     */
    this.locateShot = function(x, y){
        _matrix[y][x] = CONST.get('SHOT_SPACE');
        if(this.isShipHit(x, y)){
            this.setShipStatus(x, y, CONST.get('DAMAGED'));
            return true;
        };
        return false;
    };
    /**
     * This function set the status of ships
     * need the parameters x, y and status
     */
    this.setShipStatus = function(x, y, status){
        for(var i = 0; i < _ships.length; i++){
            var ship = _ships[i];
            if(ship.isShipHit(x, y)){
               ship.setStatus(status);
            };
        };
    };

    /**
     * This function validate if the ship do a hit,
     * need the parameters x and y
     */
    this.isShipHit = function (x, y){
        for(var i = 0; i < _ships.length; i++){
            if(_ships[i].isShipHit(x, y)){
                return true;
            };
        };
        return false;
    };
};