describe('Game', function () {
    it('should have 4 pieces after game start', function () {
        var pieces;
        game.startGame();
        pieces = game.getPieces();
        expect(pieces.length).toBe(4);
    });

    it('one piece should be to guess after start game', function () {
        var piecesToGuess;
        game.startGame();
        piecesToGuess = findPiecesToGuess(game.getPieces());
        expect(1).toBe(piecesToGuess.length);
    });

    it('should start game with configured number of pieces', function () {
        var numberOfPieces = 6;
        game.startGame(numberOfPieces);
        pieces = game.getPieces();
        expect(pieces.length).toBe(numberOfPieces);
    });

    it('should return bigger size of pieces', function () {
        var numberOfPieces = 6;
        game.startGame(numberOfPieces);
        game.addPiece();
        pieces = game.getPieces();
        expect(numberOfPieces + 1).toBe(pieces.length);
    });

    it('should return level 1 after increase', function () {
        var numberOfPieces = 6;
        game.startGame(numberOfPieces);
        game.increaseLevel();
        expect(1).toBe(game.getLevel());
    });

    it('should return 1 piece to highlight when 4 pieces', function () {
        var numberOfPieces = 4;
        game.startGame(numberOfPieces);
        var numToHighlight = game.getNumberToGuess();

        expect(1).toBe(numToHighlight);
    });

    it('should return 2 piece to highlight when 7 pieces', function () {
        var numberOfPieces = 7;
        game.startGame(numberOfPieces);
        var numToHighlight = game.getNumberToGuess();

        expect(2).toBe(numToHighlight);
    });
    it('should return 4 piece to highlight when 10 pieces', function () {
        var numberOfPieces = 10;
        game.startGame(numberOfPieces);
        var numToHighlight = game.getNumberToGuess();

        expect(4).toBe(numToHighlight);
    });

    it('should addPiece and return true when end level', function () {
        var result, lengthOfPieces, newLengthOfPieces;
        game.startGame();
        lengthOfPieces = game.getLengthPieces();
        result = game.checkResult('END_LEVEL');
        newLengthOfPieces = game.getLengthPieces();
        expect(lengthOfPieces + 1).toBe(newLengthOfPieces);
        expect(true).toBe(result);
    });

    it('should decrease life and return false when game over', function () {
        var result, lives, newlIves;
        game.startGame();
        lives = game.getLives();
        result = game.checkResult('GAME_OVER');
        newlIves = game.getLives();
        expect(lives - 1).toBe(newlIves);
        expect(false).toBe(result);
    });

    it('should return true when continue', function () {
        var result;
        game.startGame();

        result = game.checkResult('CONTINUE');

        expect(result).toBe(true);
    });

    it('should rand 2 pieces when 6 pieces', function () {
        var result, sizeOfRand, numberOfPieces = 6;
        game.startGame(numberOfPieces);
        game.randPiece();
        sizeOfRand = game.getRandPieces().length;
        result = game.checkResult('CONTINUE');

        expect(sizeOfRand).toBe(2);
    });

    it('should set lives on 5', function () {
        var result, numberOfLives = 5, setOfLives;
        game.startGame();
        game.setLives(5);
        setOfLives = game.getLives();

        expect(numberOfLives).toBe(setOfLives);
    });



    function findPiecesToGuess(pieces) {
        return pieces.filter(function (piece) {
            return piece.toGuess;

        })

    }
});