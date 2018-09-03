'use strict'

var game = (function () {

    var initialNumberOfPieces = 4,
        level = 0,
        randPieces = [],
        pieces = [],
        lengthOfPieces = 0,
        numberToGuess = 1,
        lives = 1,

        countNumberToGuess = function () {
            return numberToGuess = Math.floor(getLengthPieces()/2) - 1;
        },

        randPiece = function () {
            var rand = Math.random() * getLengthPieces();
            return Math.ceil(rand - 1);
        },

        generateRandPieces = function () {
            var rand, i;
            countNumberToGuess();
            randPieces = [];

            for (i = 0; i < numberToGuess; i++) {
                do {
                    rand = randPiece();
                } while (randPieces.includes(rand));
                randPieces.push(rand);

            }
        },

        setPieces = function () {
            var id;
            pieces = [];

            for (id = 0; id < lengthOfPieces; id++) {
                pieces.push({});
                pieces[id].toGuess = false;
            }
            generateRandPieces();

            return pieces;
        },

        increaseLevel = function () {
            var level = game.getLevel() + 1;
            game.setLevel(level);
        },

        getRandPieces = function () {
            return randPieces;
        },

        getPieces = function () {
            var id;

            for (id = 0; id < lengthOfPieces; id++) {
                pieces[id].toGuess = randPieces.includes(id);
            }

            return pieces;
        },


        startGame = function (config) {
            if (config ) {
                lengthOfPieces = config;
            } else {
                lengthOfPieces = initialNumberOfPieces;
            }
            level = 0;
            lives = 1;
            setPieces();

        },
        addPiece = function () {
            lengthOfPieces++;
            level++;
            setPieces();

        },
        getLengthPieces = function () {
            return lengthOfPieces;
        },

        getLevel = function () {
            return level;
        },
        setLevel = function (newLevel) {
            level = newLevel;
        },
        getNumberToGuess = function () {
            return numberToGuess;
        },
        getLives = function () {
            return lives;
        },
        setLives = function (numberOfLives) {
            lives = numberOfLives;
        },
        checkResult = function (result) {

            if(result === 'END_LEVEL'){
                addPiece();
                return true;
            }else if(result === 'GAME_OVER'){
                if(--lives === 0){
                    return false;
                }
            }
            return true;
        };

    return {
        'startGame': startGame,
        'addPiece': addPiece,
        'getPieces': getPieces,
        'getLengthPieces': getLengthPieces,
        'getLevel': getLevel,
        'setLevel': setLevel,
        'increaseLevel': increaseLevel,
        'randPiece': randPiece,
        'getRandPieces': getRandPieces,
        'generateRandPieces': generateRandPieces,
        'getNumberToGuess' : getNumberToGuess,
        'checkResult' : checkResult,
        'getLives' : getLives,
        'setLives' : setLives

    }
})();