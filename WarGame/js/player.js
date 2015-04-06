/**
 * This function is for initialize the player and his attributes (name, id, score) ahd his ships
 */
var Player = function(id){
    var _id = id;
    var _score = 0;
    var _board = new Board(_id);
    var _shots = new Array();
    var _inTurn = false;

    /**
     * This function set as player in turn.
     */
    this.setAsPlayerInTurn = function(inTurn){
        _inTurn = inTurn;
    };

    /**
     * This function get the board
     */
    this.getBoard = function(){
        return _board;
    };

    /**
     * This function get the score of each player
     */
    this.getScore = function(){
        return _score;
    };
    /**
     * This function is for displaying in console the name, id and score of the player.
     */
    this.displayBoard = function(){
        console.log('Player ' + _id + ' : ' + _score +' pts');
        _board.displayBoard();
    };
    /**
     * This function initialize the game
     */
    this.initializePlayer = function(){
        _board.initializeBoard();
    };
    /**
     * This function add new shots for each player
     */
    this.addShot = function(x, y, status, destinationPlayer){
        var shot = new Shot(x, y, status, destinationPlayer);
        _shots.push(shot);
    };

    /**
     * This function call the function for change the turn of players
     */
    this.isInTurn = function(){
        return _inTurn;
    };

    /**
     * This function increase the score for each player
     */
    this.increaseScore = function(increment){
        _score = _score + increment;
    };
};
