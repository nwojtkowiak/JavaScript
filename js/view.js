var view = function () {
    var getInitialNumberOfPieces = function () {
            //dom
            return 4;
        },
        draw = function (fromId, num) {
            var i, element, piece;
            if (!num) {
                num = getInitialNumberOfPieces();
            }
            element = document.getElementById("pieces");
            for (i = fromId; i < fromId + num; i++) {
                piece = document.createElement("div");
                /*piece.innerHTML = " <rect  x={x} width='80' height='80' style='fill:white;stroke:black;stroke-width:5;opacity:0.5'/>";*/
                piece.setAttribute("onclick", "controller.changeColor(" + i + ")");
                piece.setAttribute("class", "piece");
                piece.setAttribute("id", i);
                element.appendChild(piece);
            }
        },
        highlightPieces = function (pieces) {
            var i, element;
            for (i = 0; i < pieces.length; i++) {
                if (pieces[i].toGuess) {
                    element = document.getElementById(i);
                    element.style.backgroundColor = "grey";
                }
            }
            unHighlightPieces(pieces);
        },
        unHighlightPieces = function (pieces) {
            setTimeout(() => {
                var i, element;
                for (i = 0; i < pieces.length; i++) {
                    if (pieces[i].toGuess) {
                        element = document.getElementById(i);
                        element.style.backgroundColor = "blue";
                    }
                }
            }, 1000);
        },
        changeColor = function (id, pieces) {
            var element = document.getElementById(id);
            element = document.getElementById(id.toString());
            if (pieces[id].toGuess) {
                element.style.backgroundColor = "green";
                setTimeout(function () {
                    element.style.backgroundColor = "blue";
                }, 1000);

            } else {
                element.style.backgroundColor = "red";
                setTimeout(function () {
                    element.style.backgroundColor = "blue";
                }, 1000);
            }
        };


    return {
        'getInitialNumberOfPieces': getInitialNumberOfPieces,
        'draw': draw,
        'changeColor': changeColor,
        'highlightPieces': highlightPieces
    };
}();