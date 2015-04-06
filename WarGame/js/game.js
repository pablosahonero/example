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
        /*
        * call to function change turn
        * */
        this.changeTurnPlayer();
     };

    /**
     * This function displays all the Boards involved in the game
     */
    this.displayGame = function(){
        for(var i = 0; i < _players.length; i++){
            _players[i].displayBoard();
        };
    };
    /**
     * This function shoot in the board, need three parameters
     */
    this.shootBoard = function(originPlayer, x, y, destinationPlayer){
        var origin = _players[originPlayer];
        origin.addShot(x, y);
        var destination = _players[destinationPlayer];
        destination.locateShot(x, y);
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
    this.changeTurnPlayer = function(){
        do{
            for(var i = 0; i < _players.length; i++){
                var playerDestination = this.convertToNumber(prompt("Enter the destination player"));


                    var player= this.controlPlayerExists();

                    var playerDestination= this.controlValidatePlayerShootSelf()

                            this.shootBoard(i,
                            this.convertToNumber(prompt("Enter X position for shooting")),
                            this.convertToNumber(prompt("Enter Y position for shooting")),
                            playerDestination );
            };
            _turn = _turn - 1;
        }
        while(_turn > 0);
       return true;
    };

    /**
     * This function validate the number of player destination exist in the array of players
     * */
    this.playerExists = function(playerDestination){
        var turnBool=false;
        for(var i = 0; i < _players.length; i++){
         if(playerDestination == _players[i]){
              turnBool=true;
           }
          else{
                window.prompt("Enter a valid player Exists");
            };
        };
        return turnBool;
    };

    /**
     * This function validate if player does not shooting him self.
     * */
    this.validatePlayerShootSelf = function(currentPlayer, playerDestination){

        return currentPlayer == playerDestination? true: false;
    };

    /**
     * This function check if the player enter a player valid
     * */
    this.controlPlayerExists = function(){
        var bool = true;
        while(bool){
            var player = window.prompt();
            if(!this.playerExists(player)){
                bool = false;
            }else{
                console.log("Enter a user valid control Player Exists");
            }
        };
        return player;
    };

    /**
     *This function check if the player enter a player valid "Self"
     * */
    this.controlValidatePlayerShootSelf = function (){
        var bool = true;
        while(bool){
            var player = window.prompt();
            if(!this.validatePlayerShootSelf(player)){
                bool = false;
            }else{
                console.log("Enter a user control Validate Player Shoot Self");
                 }
             };
        return player;
        };
   };