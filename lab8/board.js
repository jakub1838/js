import { Ball } from "./Ball.js";
export class Board {
    height = 0;
    width = 0;
    context = null;
    balls = [];
    constructor(height, width, context) {
        this.height = height;
        this.width = width;
        this.context = context;
    }

    //dodawanie na plansze piłeczki
    add(object) {
        if (object.move)
            this.balls.push(object);
    }

    //dodawanie wielu kulek o róznej wielkości
    addManyBalls(count) {
        for (let i = 0; i < count; i++) {
            this.add(new Ball(Math.random() * this.width, Math.random() * this.height, Math.random() * (20 - 10) + 10, i));
        }
    }

    //usuwanie kulek
    removeBalls(count) {
        this.balls.splice(0, count);
    }

    //poruszanie się kulek
    nextFrame() {
        this.context.clearRect(0, 0, this.width, this.height);
        for (let object of this.balls) {
            const data = this.calculateMove(object);
            object.move(data.x, data.y, this.context);
            this.calcualteLine(object);
        }
    }

    //poruszanie się piłeczki
    calculateMove(object) {
        this.bounce(object);
        let x = object.x + object.speed * Math.cos(object.direction);
        let y = object.y + object.speed * Math.sin(object.direction);

        return { x, y };
    }

    //sprawdzanie czy wytworzy się linia
    calcualteLine(object) {
        for (let ball of this.balls) {
            if (ball.tryCollison(object, this.width * 0.1)) {
                this.connectBals(object, ball);
            }
        }
    }

    //rysowanie lini
    connectBals(ball1, ball2) {
        this.context.beginPath();
        this.context.moveTo(ball1.x, ball1.y);
        this.context.lineTo(ball2.x, ball2.y);
        this.context.stroke();
    }

    //odbijanie się od ścian
    bounce(ball) {
        if (ball.x + ball.size < 0 || ball.x + ball.size > this.width) {
            ball.direction = Math.PI - ball.direction;
        }
        if (ball.y + ball.size < 0 || ball.y + ball.size > this.height) {
            ball.direction = 2 * Math.PI - ball.direction;
        }
    }
}