import Bomb from "./Bomb";
// var playerh = document.getElementById('playerman').style.height;
// var playerw = document.getElementById('playerman').style.width;
// var playerw = document.getElementById('playerman').style.getPropertyValue("width");
//     console.log(playerw);

var boardh = 600;
var boardw = 600;
var playerh = 30;
var playerw = 30;
var playerx = boardh / playerh / 2;
var playery = boardw / playerw / 2;
var enemyh = 30;
var enemyw = 30;
var enemy1x = boardh / enemyh / 2;
var enemy1y = boardw / enemyw / 2;
var enemy2x = boardh / enemyh / 2;
var enemy2y = boardw / enemyw / 2;
var enemy3x = boardh / enemyh / 2;
var enemy3y = boardw / enemyw / 2;
const maxx = boardh / playerh;
const maxy = boardw / playerw;
const minx = -1;
const miny = -1;
const refreshtime = 500;

let playerid = document.querySelector("#playerman");

function removewhite() {
    playerid.classList.remove("whiteman");
}

document.onkeydown = function () {
    // console.log('onkeydown activated');
    switch (window.event.keyCode) {
        case 37:
            playerx--;
            break;
        case 38:
            playery--;
            break;
        case 39:
            playerx++;
            break;
        case 40:
            playery++;
            break;
        case 32:
            let test = new Bomb(playerx * playerw + "px", playery * playerh + playerh / 2 + "px",5000);
            test.drop();
            var bombElement = document.createElement("div");
            var gameboardElement = document.getElementById("gameboard");
            bombElement.setAttribute("class", "redbomb");
            gameboardElement.appendChild(bombElement);
            // document.getElementById('bomb1').style.left = playerx * playerw + "px";
            // document.getElementById('bomb1').style.top = playery * playerh + playerh / 2 + "px";
            bombElement.style.left = playerx * playerw + "px";
            bombElement.style.top = playery * playerh + playerh / 2 + "px";
            break;
    }
    if (playerx <= minx) { playerx = minx + 1; }
    if (playery <= miny) { playery = miny + 1; }
    if (playerx >= maxx) { playerx = maxx - 1; }
    if (playery >= maxy) { playery = maxy - 1; }

    document.getElementById('playerman').style.left = playerx * playerw + "px";
    document.getElementById('playerman').style.top = playery * playerh + playerh / 2 + "px";
}

// // Pour debugger et comprendre
// let posXid = document.getElementById('posX');
// console.log(posXid.style);

// posXid.innerHTML = playerx;

// var elem = document.getElementById("playerman");
// var theCSSprop = parseInt(window.getComputedStyle(elem, null).getPropertyValue("width"));

// console.log(theCSSprop);

// document.getElementById('posY').innerHTML = playery;
// // Fin - Pour debugger et comprendre

// let timerId = setTimeout(moveenemies, refreshtime);

function moveenemies() {
    // console.log('moveenemies activated');

    enemy1x = enemy1x + Math.round(Math.random()) - 0.5;
    enemy1y = enemy1y + Math.round(Math.random()) - 0.5;
    enemy2x = enemy2x + Math.round(Math.random()) - 0.5;
    enemy2y = enemy2y + Math.round(Math.random()) - 0.5;
    enemy3x = enemy3x + Math.round(Math.random()) - 0.5;
    enemy3y = enemy3y + Math.round(Math.random()) - 0.5;

    if (enemy1x <= minx) { enemy1x = minx + 1; }
    if (enemy1y <= miny) { enemy1y = miny + 1; }
    if (enemy1x >= maxx) { enemy1x = maxx - 1; }
    if (enemy1y >= maxy) { enemy1y = maxy - 1; }

    if (enemy2x <= minx) { enemy2x = minx + 1; }
    if (enemy2y <= miny) { enemy2y = miny + 1; }
    if (enemy2x >= maxx) { enemy2x = maxx - 1; }
    if (enemy2y >= maxy) { enemy2y = maxy - 1; }

    if (enemy3x <= minx) { enemy3x = minx + 1; }
    if (enemy3y <= miny) { enemy3y = miny + 1; }
    if (enemy3x >= maxx) { enemy3x = maxx - 1; }
    if (enemy3y >= maxy) { enemy3y = maxy - 1; }

    document.getElementById('enemy1').style.left = enemy1x * enemyw + "px";
    document.getElementById('enemy1').style.top = enemy1y * enemyh + enemyh / 2 + "px";
    document.getElementById('enemy2').style.left = enemy2x * enemyw + "px";
    document.getElementById('enemy2').style.top = enemy2y * enemyh + enemyh / 2 + "px";
    document.getElementById('enemy3').style.left = enemy3x * enemyw + "px";
    document.getElementById('enemy3').style.top = enemy3y * enemyh + enemyh / 2 + "px";

    // timerID = setTimeout(moveenemies, refreshtime);
}
setInterval(moveenemies, refreshtime);
