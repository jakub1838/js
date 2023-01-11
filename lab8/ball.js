export class Ball {
    x = 0;
    y = 0;
    speed = Math.random() * 3;
    direction = Math.random() * 2 * Math.PI;
    size = 0;
    constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;
    }

    //rysowanie kulek
    draw(context) {
        context.beginPath();
        context.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        context.fillStyle = "black";
        context.fill();
    }

    //poruszanie się kulek
    move(x, y, context) {
        this.x = x;
        this.y = y;
        this.draw(context);
    }

    //sprawdzanie dystansu
    tryCollison(ball, requireDistance = 0) {
        let distance = Math.sqrt(Math.pow(this.x - ball.x, 2) + Math.pow(this.y - ball.y, 2));
        return distance < this.size + ball.size + requireDistance;
    }
}