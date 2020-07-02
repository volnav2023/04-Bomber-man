export default class Bomb {
    constructor(x,y,t)
    {
        console.log ("Bomb");
        this.x = x;
        this.y = y;
        this.t = t;
    }
    drop = () => {
        console.log(this.x);
        console.log(this.y);
        setTimeout(function(){console.log("timeout ds Bomb : "+this.t)}, this.t);
    }
}