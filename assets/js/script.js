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
var ennemyh = 30;
var ennemyw = 30;
var ennemy1x = boardh / ennemyh / 2;
var ennemy1y = boardw / ennemyw / 2;
var ennemy2x = boardh / ennemyh / 2;
var ennemy2y = boardw / ennemyw / 2;
var ennemy3x = boardh / ennemyh / 2;
var ennemy3y = boardw / ennemyw / 2;
const maxx = boardh / playerh;
const maxy = boardw / playerw;
const minx = -1;
const miny = -1;

let playerid = document.querySelector("#playerman");

function removewhite() {
    playerid.classList.remove("whiteman");
}

function moveplayerleft() {
    playerid.classList.remove("whiteman");
}

// document.addEventListener("keydown", removewhite);

document.onkeydown = function () {
    switch (window.event.keyCode) {
        case 37:
            console.log('Left key is pressed');
            playerx--;
            if (playerx <= minx) {
                playerx = minx + 1;
            }
            break;
        case 38:
            console.log('Up key is pressed');
            playery--;
            if (playery <= miny) {
                playery = miny + 1;
            }
            break;
        case 39:
            console.log('Right key is pressed');
            playerx++;
            if (playerx >= maxx) {
                playerx = maxx - 1;
            }
            break;
        case 40:
            console.log('Down key is pressed');
            playery++;
            if (playery >= maxy) {
                playery = maxy - 1;
            }
            break;
    }

    ennemy1x = ennemy1x + Math.round(Math.random()) - 0.5;
    ennemy1y = ennemy1y + Math.round(Math.random()) - 0.5;
    ennemy2x = ennemy2x + Math.round(Math.random()) - 0.5;
    ennemy2y = ennemy2y + Math.round(Math.random()) - 0.5;
    ennemy3x = ennemy3x + Math.round(Math.random()) - 0.5;
    ennemy3y = ennemy3y + Math.round(Math.random()) - 0.5;

    if (ennemy1x <= minx) { ennemy1x = minx + 1; }
    if (ennemy1y <= miny) { ennemy1y = miny + 1; }
    if (ennemy1x >= maxx) { ennemy1x = maxx - 1; }
    if (ennemy1y >= maxy) { ennemy1y = maxy - 1; }
    
    if (ennemy2x <= minx) { ennemy2x = minx + 1; }
    if (ennemy2y <= miny) { ennemy2y = miny + 1; }
    if (ennemy2x >= maxx) { ennemy2x = maxx - 1; }
    if (ennemy2y >= maxy) { ennemy2y = maxy - 1; }
    
    if (ennemy3x <= minx) { ennemy3x = minx + 1; }
    if (ennemy3y <= miny) { ennemy3y = miny + 1; }
    if (ennemy3x >= maxx) { ennemy3x = maxx - 1; }
    if (ennemy3y >= maxy) { ennemy3y = maxy - 1; }

    document.getElementById('playerman').style.left = playerx * playerw + "px";
    document.getElementById('playerman').style.top = playery * playerh + playerh / 2 + "px";
    document.getElementById('ennemy1').style.left = ennemy1x * ennemyw + "px";
    document.getElementById('ennemy1').style.top = ennemy1y * ennemyh + ennemyh / 2 + "px";
    document.getElementById('ennemy2').style.left = ennemy2x * ennemyw + "px";
    document.getElementById('ennemy2').style.top = ennemy2y * ennemyh + ennemyh / 2 + "px";
    document.getElementById('ennemy3').style.left = ennemy3x * ennemyw + "px";
    document.getElementById('ennemy3').style.top = ennemy3y * ennemyh + ennemyh / 2 + "px";

    // Pour debugger et comprendre
    let posXid = document.getElementById('posX');
    console.log(posXid.style);

    posXid.innerHTML = playerx;

    var elem = document.getElementById("playerman");
    var theCSSprop = parseInt(window.getComputedStyle(elem, null).getPropertyValue("width"));

    console.log(theCSSprop);

    document.getElementById('posY').innerHTML = playery;
    // Fin - Pour debugger et comprendre

};