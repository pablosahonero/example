/**
 * Created by Milenca Ventura on 4/2/2015.
 */
describe('War Game', function(){

    describe('Constants', function(){
        it('Test 1', function(){
            expect(true).toBe(true);
        });
    });

    describe('Position', function(){
        it('It should answer if the given position is the same.', function(){
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

    describe('Shot', function(){
        it('Test 1', function(){
            expect(true).toBe(true);
        });
    });

    describe('Board', function(){
        it('Test 1', function(){
            expect(true).toBe(true);
        });
    });

    describe('Players', function(){
        it('Test 1', function(){
            expect(true).toBe(true);
        });
    });

    describe('Game', function(){
        it('Test 1', function(){
            expect(true).toBe(true);
        });
    });
});