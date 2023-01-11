import { Weather } from "./Weather.js";

export class Storage {
    constructor() {
        this.notes = [];
        this.loadFromStorage();
    }
    //dodanie miejsca
    add(note) {
        this.notes.push(note);
        this.saveToStorage();
    }
    //usuwanie miejsca
    remove(note) {
        this.notes.splice(this.notes.indexOf(note), 1);
        this.saveToStorage();
    }

    //zapisywanie do local storage
    saveToStorage() {
        localStorage.setItem("weather", JSON.stringify(this.notes.map(note => note.jSON())));
    }
    //wczytywanie z local storage
    loadFromStorage() {
        const notess = JSON.parse(localStorage.getItem("weather")) ?? [];
        notess.forEach(note => {
            this.notes.push(new Weather(note.city, note.weatherData));
        });
        addEventListener("change", this.saveToStorage.bind(this));
    }
}
