// function disp(str){
// //alert(str);
// document.getElementById('my_msg').innerHTML=str;
// }

// document.onkeydown = function() {
//     switch (window.event.keyCode) {
//         case 37:
//          disp('Left key is pressed') // execute a function by passing parameter 
//          break;
//         case 38:
//          disp('Up key is pressed') 
//          break;
//         case 39:
// 		disp('Right key is pressed') 
//          break;
//         case 40:
// 		disp('Down key is pressed')  
//         break;
//     }
// };

let player = document.querySelector("#player");

console.log(player);

function removewhite() {
     player.classList.remove("whiteman");
}
// function setwhite() {
//     player.classList.add("whiteman")
// }

player.addEventListener("click", removewhite);