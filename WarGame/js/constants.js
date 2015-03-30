/**
 * This class is for use contans in the app
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
        'TOTAL_SHIPS': 10,
/**
 * This variable is for the max size of the game board
 */
        'BOARD_SIZE_MAX': 20,
/**
 * This variable is for the min size of the game board
 */
        'BOARD_SIZE_MIN': 10,
/**
 * This variable is for the turs of every player. E.G for 3 player exists 60 turn 20 for every player
 */
        'GAME_TURNS': 20,
/**
 * Thi variables are for the game board, in the board for drawing the game a "0" value represents a FREE SPACE,
 * "1" value represents a SHIP and "2" represents a Shots
 */
        'FREE_SPACE': 0,
        'SHIP_SPACE': 1,
        'SHOT_SPACE': 2
    };

    return {
        get: function(key) { return private[key]; }
    };
})();
