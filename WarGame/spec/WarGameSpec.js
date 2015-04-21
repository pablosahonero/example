/**
 * Created by Milenca Ventura on 4/2/2015.
 */
describe('War Game', function(){

    /*
     * Test cases for class position.
     * this test cases validate the value enter for X, Y and if the
     * values are undefined or letters
     * */

    describe('Position', function(){
        var position = new Position(5,3);

        it('Verify if the value x exist', function(){
            expect(position.getX()).toBe(5);

        });
        it('Verify if the value x does not exist', function(){
            var position = new Position(undefined ,3);
            expect(function(){position.getX();}).toThrow("Error: enter an position X");
        });
        it('Verify if the value y exist', function(){
            expect(position.getY()).toBe(3);
            /*expect()*/
        });
        it('Verify if the value x should be a number no letter', function(){
            var position = new Position('s' ,3);
            expect(function(){position.getX();}).toThrow("Error: enter a number value for X");
        });
        it('Verify if the value y should be a number no letter', function(){
            var position = new Position(3,'E');
            expect(function(){position.getY();}).toThrow("Error: enter a number value for Y");
        });
        it('Verify if the value Y does not exist', function(){
            var position = new Position(3,undefined);
            expect(function(){position.getY();}).toThrow("Error: enter an position Y");
        });
        it('Verify if the values x and y should be equals', function(){
            var position = new Position(5,3);
            expect(position.isSamePosition(5,3)).toBe(true);
        });

    });


    describe('Ship', function(){
        var ship;
        beforeEach(function(){
            ship = new Ship();
        });

        afterEach(function(){
            ship = null;
        });
        it('It should return an array of Positions that represent the Ship location', function(){
            ship.initializeShip();
            var isArray = ship.getLocation() instanceof Array;
            expect(isArray).toBe(true);
        });

        it('It should set the given value as the current Status of the Ship', function(){
            ship.initializeShip();
            expect(ship.getStatus()).toBe(0);
            ship.setStatus(5);
            expect(ship.getStatus()).toBe(5);
        });

        it('It should return an Orientation value between 1 (Vertical) and 2 (Horizontal)', function(){
            ship.initializeShip();
            var orientation = ship.getOrientation();
            var isOrientationValid = orientation == 1 || orientation == 2? true:false;
            expect(isOrientationValid).toBe(true);
        });

        it('It should answer if a Ship was hit or not', function(){
            ship.initializeShip();
            var x = ship.getLocation()[0].getX();
            var y = ship.getLocation()[0].getY();
            expect(ship.isShipHit(x,y)).toBe(true);
        });

        it('It should create a ship with a size less or equal to MAX_SHIP_SIZE value in constant class', function(){
            ship.initializeShip();
            var numberOfShips = ship.getLocation().length;
            expect(numberOfShips <= CONST.get('MAX_SHIP_SIZE')).toBe(true);
        });

        it('It should set and start and end position after creating a Ship', function(){
            ship.initializeShip();
            var isEndPositionDefined = ship.getEndPosition() instanceof Position;
            var isStartPositionDefined = ship.getStartPosition() instanceof Position;
            expect(isEndPositionDefined && isStartPositionDefined).toBe(true);
        });

        it('It should not be allowed to get the start and end position from a Ship before initializing it', function(){
            expect(function(){ship.getStartPosition();}).toThrow("Error: Start Position is not defined");
            expect(function(){ship.getEndPosition();}).toThrow("Error: End Position is not defined");
        });

        it('It should not be allowed to get the Location (Array of Positions) of a Ship before initializing it', function(){
            expect(function(){ship.getLocation();}).toThrow("Error: Location is not defined");
        });

        it('It should not be allowed to get the Orientation (Vertical or Horizontal) of a Ship before initializing it', function(){
            expect(function(){ship.getOrientation();}).toThrow("Error: Orientation is not defined");
        });
    });

    /*
     * Test cases for class Shot.
     * this test cases validate the value enter for X, Y and if the
     * values are undefined or not a letter show an error message
     * */
    describe('Shot', function(){
        var shot = new Shot(5,3);
        it('Verify if the status of the player is undefined', function(){
            expect(function(){shot.setStatus();}).toThrow("Error: enter a status");
        });
        it('Verify if the status does not a number', function(){
            expect(function(){shot.setStatus();}).toThrow("Error: enter a status");
        });
    });



    describe('Board', function(){

        it('Test 1', function(){
            expect(true).toBe(true);
        });
    });

    /*
     * Test cases for class position.
     * this test cases validate the value enter for X, Y and if the
     * values are undefined or letters
     * */
    describe('Players', function(){
        var player = new Player(1);
        player.initializePlayer();
        var destinationPlayer = new  Player(2);
        destinationPlayer.initializePlayer();
        player.addShot(4,2, status, destinationPlayer);

        it('Verify if the Player shot an specific destination player', function(){
            expect(player.getShots().length>0).toBe(true);
        });

    });


    describe('Game', function(){

        var game = new Game("WAR GAME", 3);
        it('It should return the number of players expected', function(){
            game.startGame();
            var isNumberOfPlayersTheSame = game.getNumberOfPlayers() == game.getPlayers().length;
            expect(isNumberOfPlayersTheSame).toBe(true);
        });

        it('It should return the name expected', function(){
            game.startGame();
            var isNameOfPlayersTheSame = game.getNameOfPlayers() == game.getName();
            expect(isNameOfPlayersTheSame).toBe(true);
        });

        it('Verify that the number of player are not the expected', function(){
            expect(function(){game.getNumberOfPlayers() != game.  setStatus();}).toThrow("Error: are not the number of pplayers");
        });

        it('Verify that the name of player are not the expected', function(){
            expect(function(){game.getNameOfPlayers() != game.  setStatus();}).toThrow("Error: are not the name expected");

        });



    });
});