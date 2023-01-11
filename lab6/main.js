import { Ball} from "./ball.js";
import { Board } from "./board.js";

let gamma = 0;
let beta = 0;

const setup = () => {
    let canvas = document.getElementById("canvas");
    let context = canvas.getContext("2d");
    let tboard = new Board(canvas.height, canvas.width, context);
    let ball = new Ball(canvas.width/2, canvas.height/2, 10);
    tboard.add(ball);
    tboard.addManyHoles(5);
    return tboard;
}

let board = setup();

let animate = () => {
    board.nextFrame(beta, gamma);
    requestAnimationFrame(animate);
};
requestAnimationFrame(animate);

//pobieranie danych z akcelerometru
window.addEventListener("deviceorientation", (event) => {
    beta = event.beta; //oś y
    gamma = event.gamma; //oś x
});
