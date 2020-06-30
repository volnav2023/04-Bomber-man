
let player = document.querySelector("#player");

console.log(player);

function removewhite() {
    player.classList.remove("whiteman");
}

document.addEventListener("keydown", removewhite);

document.onkeydown = function () {
    switch (window.event.keyCode) {
        case 37:
            console.log('Left key is pressed');
            break;
        case 38:
            console.log('Up key is pressed');
            break;
        case 39:
            console.log('Right key is pressed');
            break;
        case 40:
            console.log('Down key is pressed');
            break;
    }
};