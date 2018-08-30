var view = function () {
    var getInitialNumberOfPieces = function () {
            //dom
            return 4;
        },
        draw = function (fromId, num) {
            var i;
            if (!num) {
                num = getInitialNumberOfPieces();
            }
            var element = document.getElementById("pieces");
            for (i = fromId; i < num; i++) {
                var piece = document.createElement("div");
                /*piece.innerHTML = " <rect  x={x} width='80' height='80' style='fill:white;stroke:black;stroke-width:5;opacity:0.5'/>";*/
                piece.setAttribute("onclick", "controller.changeColor(" + i + ")");
                piece.setAttribute("class", "piece");
                piece.setAttribute("id", i);
                element.appendChild(piece);
            }
        },
        highlightPieces = function (pieces) {
            var i;
            for (i = 0; i < pieces.length; i++) {
                if (pieces[i].toGuess) {
                    var element = document.getElementById(i.toString());
                    element.style.backgroundColor = "grey";
                    setTimeout(function () {element.style.backgroundColor = "blue";}, 1000);

                }
            }
        },
        changeColor = function (id) {
            var element = document.getElementById(id);

            element.style.backgroundColor = "green";
        };


    return {
        'getInitialNumberOfPieces': getInitialNumberOfPieces,
        'draw': draw,
        'changeColor': changeColor,
        'highlightPieces': highlightPieces
    };
}();