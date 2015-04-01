/**
 * Created by Samuel Vargas on 3/24/2015.
 */

/**
 * Represents the current Game
 * @param name represents the name of the Game
 * @param players represents the number of players
 * @param represents the size of the Player's Board
 */
var Game = function (name, players)// be careful with the size, size = 10
{
    /**
     * Name of the Game
     * @type {string}
     */
    var _name = name;
    /**
     * Array of the Boards that are going to be used in the game
     * @type {Array{Board}}
     */
    var _boards = Array();
    /**
     * Number of players in the Game
     * @type {number}
     */
    var _players = players;
    /**
     * Represents the
     * @type {bool}
     */
    var _boolTurn;
    /**
     * This var represent when the player has his turn
     * @type {(bool)}
     */
    this.startGame = function(){
        for(var i = 0; i < _players; i++){
            /**
             * Object Board to be used in the game
             * @type {Board}
             */
            var board = new Board(i);
            board.initializeBoard();
            _boards.push(board);
        };
    };

    /**
     * This function displays all the Boards involved in the game
     */
    this.displayGame = function(){
        for(var i = 0; i < _boards.length; i++){
            _boards[i].displayBoard();
        };
    };
    /**
     * Validate the change of turn for the user.
     * */
    this.validationTurn = function () {
    if(CONST.get('CONTROL_TURNS')==true){
        _boolTurn=true;
    }
        else{
        alert('Please wait for your turn.');
    };
    };
};