import {DataStorage} from "./storage.js";

let data = new DataStorage();
let intervalsRecords = [];

//mapowanie klawiszy
const onKeyPress = (event) => {
    switch (event.key) {
        case "1":
            recording("boom");
            break;
        case "2":
            recording("clap");
            break;
        case "3":
            recording("hihat");
            break;
        case "4":
            recording("kick");
            break;
        case "5":
            recording("openhat");
            break;
        case "6":
            recording("ride");
            break;
        case "7":
            recording("snare");
            break;
        case "8":
            recording("tink");
            break;
        case "9":
            recording("tom");
            break;
        default:
            break;
      }
}

//nagraj
const recording = (sound) => {
    data.pushData(sound)
    playS(sound)
}

//odtwórz dźwięk
const playS = (sound) => {
    const audioTag = document.querySelector(`#${sound}`).querySelector("audio");
    audioTag.currentTime = 0;
    audioTag.play();
}

//odtwórz nagranie
const playR = (event) => {
    const storage = data.getData(event.target.parentElement.id);
    for (const element of storage) {
        setTimeout(() => {
            playS(element.soundName)
        }, element.timestamp - storage[0].timestamp)
    }
}

const removeIntervalRecorded = (id) => {
    const index = intervalsRecords.findIndex(item => item.id === id)
    if (index > -1) {
        intervalsRecords.splice(index, 1);
    }
}

//wyłącz przyciski
const disableButtons = (element) => {
    element.querySelectorAll("button").forEach(item => item.disabled = true);
}
//włącz przyciski
const enableButtons = (element) => {
    element.querySelectorAll("button").forEach(item => item.disabled = false);
}

//procedura nagrywanie, blokowanie przycisków
document.querySelectorAll("#start").forEach(item => {
    item.addEventListener("click", (event) => {
        data.activeChannel(event.target.parentElement.id)
        disableButtons(event.target.parentElement);
        setTimeout(() => {
            data.deactiveChannel(event.target.parentElement.id);
            enableButtons(event.target.parentElement);
        }, 1000 * 10)
    })
})

//wyczyść kanał
document.querySelectorAll("#clear").forEach(item => {
    item.addEventListener("click", (event) => {
        data.clearData(event.target.parentElement.id);
    })
})

//odtwórz kanał
document.querySelectorAll("#play").forEach(item => {
    item.addEventListener("click", (event) => {
        playR(event);
    })
})

//odtwórz kanał w pętli
document.querySelectorAll("#loop").forEach(item => {
    item.addEventListener("click", (event) => {
        const id = event.target.parentElement.id;
        const isRunning = intervalsRecords.find(item => item.id === id);
        if (isRunning) {
            clearInterval(isRunning.interval)
            removeIntervalRecorded(id);
        }
        if (!event.target.checked)
            return;
        const interval = setInterval(() => {
            playR(event);
        }, 1000 * 10);
        const toSave = { interval: interval, id: id }
        intervalsRecords.push(toSave);
    })
})


window.addEventListener("load", (event) => {
    const tmp = document.querySelectorAll("#start");
    tmp.forEach(item => data.registerId(item.parentElement.id));
});

document.addEventListener("keypress", onKeyPress)