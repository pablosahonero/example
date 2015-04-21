/**
 * Created by Samuel Vargas on 3/24/2015.
 */

/**
 * Represents the current Game
 * @param name represents the name of the Game
 * @param numberOfPlayers represents the number of players
 */
var Game = function (name, numberOfPlayers)// be careful with the size, size = 10
{
    /**
     * Name of the Game
     * @type {string}
     */
    var _name = name;
    /**
     * Array of the Boards that are going to be used in the game
     * @type {Array}
     */
    var _players = Array();
    /**
     * Number of players in the Game
     * @type {number}
     */

    var _numberOfPlayers = numberOfPlayers;
    /**
     * This function initializes the boards to be used during the game.
     */
    this.startGame = function(){
        for(var i = 0; i < _numberOfPlayers; i++){
            /**
             * Object Board to be used in the game
             * @type {Player}
             */
            var player = new Player(i);
            player.initializePlayer();
            _players.push(player);
        };
    };

    /**
     * This function displays all the Boards involved in the game
     */
    this.displayGame = function(){
        for(var i = 0; i < _players.length; i++){
            _players[i].displayBoard();
        };
    };

    this.shootBoard = function(originPlayer, x, y, destinationPlayer){
        var origin = _players[originPlayer];
        origin.addShot(x, y);
        var destination = _players[destinationPlayer];
        destination.locateShot(x, y);
    };
};