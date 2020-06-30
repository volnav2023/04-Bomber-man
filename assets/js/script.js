// var playerh = document.getElementById('playerman').style.height;
// var playerw = document.getElementById('playerman').style.width;
var playerh = 30;
var playerw = 30;
var boardh = 600;
var boardw = 600;
var playerx = boardh / playerh / 2;
var playery = boardw / playerw / 2;
const maxx = boardh / playerh;
const maxy = boardw / playerw;
const minx = -1;
const miny = -1;
// var playerm = $("#playerman");
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
            } break;
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


    // player.style.left = 300+"px";

    // document.getElementById('#playerman').left = (playerx);

    document.getElementById('playerman').style.left = playerx * playerw + "px";
    document.getElementById('playerman').style.top = playery * playerh + 12.5+"px";
    document.getElementById('posX').innerHTML = playerx;
    document.getElementById('posY').innerHTML = playery;

    console.log(playerid);
    console.log(playerh);

    // document.getElementById('texto').innerText = "Textb";

};