import { Hole } from "./hole.js";
export class Board {
    height = 0;
    width = 0;
    isFinished = false;
    scorePoints = 0;
    context = null;
    balls = [];
    holes = [];

    constructor(height, width, context, timer = 1000 * 60) {
        this.height = height;
        this.width = width;
        this.context = context;
        this.setTimer(timer);
    }
    //dodawanie na plansze piłeczki i dziur
    add(object) {
        if (object.move)
            this.balls.push(object);
        else
            this.holes.push(object);
    }
    //dodawanie dziur
    addManyHoles(count) {
        for (let i = 0; i < count; i++) {
            this.add(new Hole(Math.random() * this.width, Math.random() * this.height, 10, i));
        }
    }
    //gra
    nextFrame(beta, gamma) {
        if (this.isFinished || this.holes.length === 0) {
            return this.over();
        }
        this.context.clearRect(0, 0, this.width, this.height); //czyszczenie
        this.holes.forEach(hole => hole.draw(this.context));
        for (let object of this.balls) {
            const data = this.calculateMove(beta, gamma, object);
            object.move(data.x, data.y, this.context);
            this.calcualteCollisions(object);
        }
    }
    //poruszanie się piłeczki
    calculateMove(beta, gamma, object) {
        const angle = (Math.atan2(beta, gamma) * 180) / Math.PI;
        const speed = (Math.abs(beta) + Math.abs(gamma)) / 20;
        const x = object.x + Math.cos((Math.PI * angle) / 180) * speed;
        const y = object.y + Math.sin((Math.PI * angle) / 180) * speed;

        if (x < 0 || x > this.width || y < 0 || y > this.height) {
            return { x: object.x, y: object.y };
        }
        return { x, y };
    }

    //resetowanie pozycji piłeczki i dodawanie punktów przy dotknięciu
    calcualteCollisions(ball) {
        for (let hole of this.holes) {
            if (hole.collision(ball) && hole.number === this.scorePoints) {
                this.resetBall();
                this.score();
            }
        }
    }

    //resetowanie pozycji piłeczki na środek ekranu
    resetBall() {
        this.balls.forEach(ball => ball.move(this.width / 2, this.height / 2, this.context));
    }

    //dodawanie punktów
    score() {
        this.holes.shift();
        this.scorePoints++;
        document.getElementById("score").innerText = this.scorePoints;
    }

    //czas gry
    setTimer(timer) {
        setTimeout(() => {
            this.isFinished = true;
        }, timer);
    }

    //wyświetlanie komunikatu o końcu gry
    over() {
        this.context.clearRect(0, 0, this.width, this.height); //czyszczenie planszy
        this.context.font = '100px';
        this.context.fillText("Koniec gry", 0, this.height / 2);
    }
}