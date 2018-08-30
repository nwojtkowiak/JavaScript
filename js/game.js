let game = (function () {

    let initialNumberOfPieces = 4,
        level = 0,
        points = 0,
        randPieces = [],
        pieces = [],
        currentOfPieces,


        countNumberOfHighlight = function () {
            return game.getLengthPieces() - 3 - game.getLevel();
        },

        randPiece = function () {
            var rand = Math.random() * game.getLengthPieces();
            return Math.ceil(rand - 1);
        },

        generateRandPieces = function () {
            let randNumbers = countNumberOfHighlight();
            let rand, i;
            console.log("randNumbers: " + randNumbers);

            randPieces = [];

            for (i = 0; i < randNumbers; i++) {
                do {
                    rand = randPiece();
                } while (randPieces.includes(rand));
                console.log("RAND: " + rand);
                randPieces.push(rand);

            }
        },

        setPieces = function () {
            let i;//, pieces = [];

            for (i = 0; i < currentOfPieces; i++) {
                pieces.push({});
                pieces[i].toGuess = false;
            }
            return pieces;
        },

        increaseLevel = function () {
            let level = game.getLevel() + 1;
            game.setLevel(level);

        },

        getRandPieces = function () {

            return randPieces;
        },

        getPieces = function () {
            let i;

            for (i = 0; i < currentOfPieces; i++) {

                if (randPieces.includes(i, 0)) {
                    pieces[i].toGuess = true;
                } else {
                    pieces[i].toGuess = false;
                }
            }
            return pieces;
        },


        startGame = function (config) {
            if (config && config.numberOfPieces) {
                currentOfPieces = config.numberOfPieces;
            } else {
                currentOfPieces = initialNumberOfPieces;
            }
            level = 0;
            setPieces();
            generateRandPieces();
        },
        addPiece = function () {
            currentOfPieces = currentOfPieces + 1;
            setPieces();

        },
        getLengthPieces = function () {
            return currentOfPieces;
        },

        getLevel = function () {
            return level;
        },
        setLevel = function (newLevel) {
            level = newLevel;
        };

    return {
        'startGame': startGame,
        'addPiece': addPiece,
        'getPieces': getPieces,
        'setPieces': setPieces,
        'getLengthPieces': getLengthPieces,
        'getLevel': getLevel,
        'setLevel': setLevel,
        'increaseLevel': increaseLevel,
        'countNumberOfHighlight': countNumberOfHighlight,
        'randPiece': randPiece,
        'getRandPieces': getRandPieces,
        'generateRandPieces': generateRandPieces

    }
})();