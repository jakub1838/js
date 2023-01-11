export class Ball {
    x = 0;
    y = 0;
    size = 0;
    constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;
    }
    //wygląd piłeczki
    draw(context) {
        context.beginPath();
        context.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        context.fillStyle = "red";
        context.fill();
    }
    //poruszanie się piłeczki
    move(x, y, context) {
        this.x = x;
        this.y = y;
        this.draw(context);
    }
}