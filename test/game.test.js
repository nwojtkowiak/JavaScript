
describe('Game', function () {
     it('should have 4 pieces after game start', function () {
        let pieces;
        game.startGame();
        pieces = game.getPieces();
        //console.log(spec1.getFullName());
        expect(pieces.length).toBe(4);
    });

    it('one piece should be to guess after start game', function () {
        let piecesToGuess;
        game.startGame();
        piecesToGuess = findPiecesToGuess(game.getPieces());
       // console.log(spec2.getFullName());
        expect(1).toBe(piecesToGuess.length);
    });

    it('should start game with configured number of pieces', function () {
        let pieces,
            config  = {
            numberOfPieces : 6
            };
        game.startGame(config);
        pieces = game.getPieces();
       // console.log(spec3.getFullName());
        expect(pieces.length).toBe(config.numberOfPieces);
    });

    it('should return bigger size of pieces', function () {
        let pieces,
            config  = {
                numberOfPieces : 6
            };
        game.startGame(config);
        game.addPiece();
        pieces = game.getPieces();
        // console.log(spec3.getFullName());
        expect(config.numberOfPieces+1).toBe(pieces.length);
    });

    it('should return level 1 after increase', function () {
        let config  = {
                numberOfPieces : 6
            };
        game.startGame(config);
        game.increaseLevel();
        // console.log(spec3.getFullName());
        expect(1).toBe(game.getLevel());
    });

    it('should return 1 piece to highlight', function () {
        let config  = {
                numberOfPieces : 4
            };
        game.startGame(config);
        let numToHighlight = game.countNumberOfHighlight();
        // console.log(spec3.getFullName());
        expect(1).toBe(numToHighlight);
    });



    function  findPiecesToGuess(pieces) {
        return pieces.filter(function (piece) {
            return piece.toGuess;

        })

    }
});