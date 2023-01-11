import {Board} from "./board.js";

//animacja
let board;
const animate = () => {
    board.nextFrame();
    requestAnimationFrame(animate);
};

//start 
const start = () => {
    let canvas = document.getElementById("canvas");
    let context = canvas.getContext("2d");
    let tmpboard = new Board(canvas.height, canvas.width, context);
    tmpboard.addManyBalls(50);
    return tmpboard;
}

//startowanie z przycisku
document.querySelector("#start").addEventListener("click", (event) => {
    event.target.disabled = true;
    board = start();
    requestAnimationFrame(animate);
});

//resetowanie z przycisku
document.querySelector("#reset").addEventListener("click", () => {
    board = start();
});

//slider z ilością kulek
document.querySelector("#balls").addEventListener("change", () => {
    let range = document.querySelector("#balls").value;
    if (range > board.balls.length) {
        board.addManyBalls(range - board.balls.length);
    }
    else {
        board.removeBalls(board.balls.length - range);
    }
});
