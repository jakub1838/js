export class Hole {
    x = 0;
    y = 0;
    size = 0;
    number = 0;
    dNumber = 0;
    constructor(x, y, size, number) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.number = number;
        this.dNumber = ' ' + number;
    }

    //wygląd dziury
    draw(context, color = "black") {
        context.beginPath();
        context.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        context.fillStyle = color;
        context.fill();
        context.font = "18px Arial";
        context.fillStyle = "white";
        context.fillText(this.dNumber, this.x - 10, this.y + 7); //wypisywanie numeru dziury z offsetem
        context.stroke();
    }

    //sprawdzanie czy piłeczka dotknęła dziurę
    collision(ball) {
        let distance = Math.sqrt(Math.pow(this.x - ball.x, 2) + Math.pow(this.y - ball.y, 2));
        return distance < this.size + ball.size;
    }
}