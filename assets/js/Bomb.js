export default class Bomb {
    constructor(x, y, t, bombId, bombColor) {
        console.log("Bomb");
        this.x = x;
        this.y = y;
        this.t = t;
        this.bombId = bombId;
        this.bombColor = bombColor;
    }
    drop = () => {
        console.log(this.x);
        console.log(this.y);
        setTimeout(function () { console.log('timeout ds Bomb : ' + this.t) }, this.t);
 
        let bombElement = document.createElement("div");
        let gameboardElement = document.getElementById("gameboard");
        bombElement.setAttribute("class", this.bombColor);
        bombElement.setAttribute("id", this.bombId);
        gameboardElement.appendChild(bombElement);

        document.getElementById(this.bombId).style.left = this.x;
        document.getElementById(this.bombId).style.top = this.y;
    }
}