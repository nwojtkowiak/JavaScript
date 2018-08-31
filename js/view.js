'use strict'

var view = function () {
    var correctAnswers = 0,
        timeout = 1000,
        getInitialNumberOfPieces = function () {
            //dom
            return 4;
        },
        draw = function (num) {
            var i, element, piece;
            if (!num) {
                num = getInitialNumberOfPieces();
            }
            element = document.getElementById("pieces");
            element.innerHTML = "";
            for (i = 0; i < num; i++) {
                piece = document.createElement("div");
                //piece.addEventListener("click", controller.changeColor(" + i + "));
                piece.setAttribute("onclick", "controller.changeColor(" + i + ")");
                piece.setAttribute("class", "piece");
                piece.setAttribute("id", i);
                element.appendChild(piece);
            }
        },
        highlightPieces = function (pieces) {
            var id, element;
            for (id = 0; id < pieces.length; id++) {
                if (pieces[id].toGuess) {
                    element = document.getElementById(id.toString());
                    element.style.backgroundColor = "blue";
                }
            }
            unHighlightPieces(pieces);
        },
        unHighlightPieces = function (pieces) {
            correctAnswers = 0;
            setTimeout(function () {
                var id, element;

                for (id = 0; id < pieces.length; id++) {
                    console.log("pieceId: " + id + " " + pieces[id].toGuess);
                    if (pieces[id].toGuess) {

                        element = document.getElementById(id.toString());
                        element.style.backgroundColor = "grey";
                    }
                }
                return true;
            }, timeout);
        },
        unHighlightPiece = function (pieceId) {
            setTimeout(function () {
                var element;
                element = document.getElementById(pieceId);
                element.style.backgroundColor = "grey";

            }, timeout);
            correctAnswers = 0;
        },
        changeColor = function (pieceId, pieces, numberToGuess) {

            var element = document.getElementById(pieceId.toString());

            if (pieces[pieceId].toGuess) {
                element.style.backgroundColor = "forestgreen";
                correctAnswers = correctAnswers + 1;
                if (correctAnswers === numberToGuess) {
                    unHighlightPieces(pieces);
                    return true;
                }

            } else {
                element.style.backgroundColor = "red";
                unHighlightPiece(pieceId);
                return false;
            }

        },
        gameOver = function () {
            var element = document.getElementById("result");
            var end = document.createElement("center");
            end.setAttribute("class", "end");
            end.innerHTML = "GAME OVER";
            element.appendChild(end);
        };


    return {
        'getInitialNumberOfPieces': getInitialNumberOfPieces,
        'draw': draw,
        'changeColor': changeColor,
        'highlightPieces': highlightPieces,
        'gameOver': gameOver
    };
}();