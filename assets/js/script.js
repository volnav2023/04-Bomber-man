var playerx = 10;
var playery = 10;
const maxx = 21;
const maxy = 21;
const minx = -1;
const miny = -1;
// var playerm = $("#playerman");



let player = document.querySelector("#playerm");

console.log(player);

function removewhite() {
    player.classList.remove("whiteman");
}

function moveplayerleft() {
    player.classList.remove("whiteman");
}

// document.addEventListener("keydown", removewhite);

document.onkeydown = function () {
    switch (window.event.keyCode) {
        case 37:
            console.log('Left key is pressed');
            playerx--;
            if (playerx == minx) {
                playerx = minx + 1;
                document.getElementById('posX').innerHTML = playerx;
                document.getElementById('posY').innerHTML = playery;
            }
            break;
        case 38:
            console.log('Up key is pressed');
            playery--;
            if (playery == miny) {
                playery = miny + 1;
                document.getElementById('posX').innerHTML = playerx;
                document.getElementById('posY').innerHTML = playery;
            } break;
        case 39:
            console.log('Right key is pressed');
            playerx++;
            if (playerx == maxx) {
                playerx = maxx - 1;
                document.getElementById('posX').innerHTML = playerx;
                document.getElementById('posY').innerHTML = playery;
            }
            break;
        case 40:
            console.log('Down key is pressed');
            playery++;
            if (playery == maxy) {
                playery = maxy - 1;
                document.getElementById('posX').innerHTML = playerx;
                document.getElementById('posY').innerHTML = playery;
            }
            break;
    }
    
    
    // player.style.left = 300+"px";

    // document.getElementById('#playerman').left = (playerx);

    document.getElementById('playerman').style.left = playerx+"px";
    // document.getElementById('texto').innerText = "Textb";

};