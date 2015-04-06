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
     * This var represents the total _turn of players
     * @type {number}
     */
    var _turn = CONST.get('GAME_TURNS');

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
        if(this.selectPlayerInTurn() == null){
            _players[0].setAsPlayerInTurn(true);
            _players[0].displayBoard();
        }else{
            _players[this.selectPlayerInTurn()].displayBoard();
        }
        this.controlPlayersTurn();
     };

    /**
     * This function displays all the Boards involved in the game
     */
    this.displayGame = function(){
        for(var i = 0; i < _players.length; i++){
            _players[i].displayBoard();
        };
    };

    this.shootBoard = function(currentPlayer, x, y, attackedPlayer){
        var originPlayer = _players[currentPlayer];
        var destinationPlayer = _players[attackedPlayer];
        var isAnyShipDamaged = destinationPlayer.getBoard().locateShot(x, y);
        var status = isAnyShipDamaged? CONST.get('HIT') : CONST.get('FAIL');
        if(status == CONST.get('HIT')){
            originPlayer.increaseScore(1);
        };
        originPlayer.addShot(x, y, status, destinationPlayer);
    };

    /**
     * This function convert strings to number
     *
     */
    this.convertToNumber = function(value){
       return parseInt(value);
    };

    /**
     * This function change the turn for players
     *
     */

    this.controlPlayersTurn = function(){

        while(_turn > 0){
            for(var i = this.selectPlayerInTurn(); i < _players.length; i++){
                console.info("Player %s is playing", i+"");
                var isTurnStarted = prompt("Start Turn");
                if(!(isTurnStarted == 'yes')){
                      return;
                }
                var playerDestination = this.convertToNumber(prompt("Enter a Valid Destination player"));
                playerDestination = this.selectValidPlayer(i, playerDestination);
                this.shootBoard(i, this.convertToNumber(prompt("Enter X position for shooting")),
                this.convertToNumber(prompt("Enter Y position for shooting")), playerDestination );
                _players[playerDestination].displayBoard();
                _players[i].setAsPlayerInTurn(false);
                if(i+1 < _players.length){
                    _players[i+1].setAsPlayerInTurn(true);
                }else{
                    _players[0].setAsPlayerInTurn(true);
                };

            };
            _turn = _turn - 1;
        }

        if(_turn == 0){
            this.countGamePoints();
        };
    };


    /**
     * This function validate the number of player destination exist in the array of players
     * */
    this.selectValidPlayer = function(currentPlayer, playerDestination){

        while(this.samePlayer(currentPlayer, playerDestination) ||
            playerDestination > _players.length || playerDestination < 0){
            if(playerDestination > _players.length || playerDestination < 0){
                this.displayWarning("The Player you want to attack does not exist");
            };
            playerDestination = this.convertToNumber(prompt("Enter a Valid Destination player"));
        };
        return playerDestination;
    };

    this.selectPlayerInTurn = function(){
        for(var i = 0; i < _players.length; i++){
            if(_players[i].isInTurn())
            {
                return i;
            };
        };
        return null;
    };

    /**
     * This function validate if player does not shooting him self.
     * */
    this.samePlayer= function(currentPlayer, playerDestination){
        this.displayWarning("You cannot attack yourself");
        return currentPlayer == playerDestination? true : false;
    };

    /**
     *Code added for count the game points.
     */
    this.countGamePoints = function (){
        this.displayMessage("GAME OVER");
        this.displayMessage("The results are:");
        var points = new Array();
        for(var i = 0; i < _players.length; i++){
            var score = {'Player' : "Player " + i, 'Score' :_players[i].getScore() };
            points.push(score);

        };
        console.table(points, ["Player", "Score"]);
    };

    this.displayMessage = function(message){
        console.info("%c"+ message, "color: red");
    };

    this.displayWarning = function(message){
        console.warn("%c"+ message, "color: red");
    };
};
