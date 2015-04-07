/**
 * In this function the @CONST is a JSON function for use the different variables we use during the game.
 */
var CONST = (function() {
    var private = {
/**
 * This varialbe is for the MAX size of the Ships
 */
        'MAX_SHIP_SIZE': 4,
/**
 * This variable is for the total amount of ships by player, that measn every player have 10 ships
 */
        'SHIPS_NUMBER': 10,
/**
 * This variable  is for the size of the game board
 */
        'BOARD_SIZE': 10,
/**
 * This variable is for the turns of every player. E.G for 3 player exists 60 turn 20 for every player
 */
        'GAME_TURNS': 10,
/**
 * Thi variables are for the game board, in the board for drawing the game a "0" value represents a FREE SPACE,
 * "1" value represents a SHIP and "2" represents a Shots
 */
        'FREE_SPACE': 0,
        'SHIP_SPACE': 1,
        'SHOT_SPACE': 2,
/**
 * This functions are for define the orientation of the ships
 *
 */
        'VERTICAL': 1,
        'HORIZONTAL': 2,
/**
*This variable is for change the turns for each player
 *
*/
        'CONTROL_TURNS': true,
        'NONE': 0,
        'HIT': 1,
        'FAIL': 2
    };

    return {
        get: function(key) { return private[key]; }
    };
})();
