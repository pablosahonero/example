/**
 * Created by Milenca Ventura on 3/31/2015.
 */
/**
 * Represents the current Game
 * @param x represents positions in x of shot
 * @param y represents the position in y of shot
 * @param status, represent the status of the shot
 * @destinationPlayer, represent the player for atack
 */
var Shot = function(x, y, status, destinationPlayer) {
    var _x = x;
    var _y = y;
    var _destinationPlayer = destinationPlayer;
    var _status = status;

    /**
     * this function set the status of each player
     *
     */
    this.setStatus = function(status){
        _status = status;
    };
};