import { Note } from "./Note.js";

export class Storage {
    constructor() {
        this.notes = [];
        this.pinnedNotes = [];
        this.loadFromStorage();
    }

    //dodawanie notatek
    add(note) {
        this.notes.push(note);
        this.saveToStorage();
    }

    //przypinanie notatek
    #pin(note) {
        this.pinnedNotes.push(note);
        this.notes.splice(this.notes.indexOf(note), 1);
        this.saveToStorage();
    }

    //usuwanie notatek
    remove(note) {
        this.notes.splice(this.notes.indexOf(note), 1);
        this.pinnedNotes.splice(this.pinnedNotes.indexOf(note), 1);
        this.saveToStorage();
    }

    //odpinanie
    #unpin(note) {
        const indexOfNote = this.pinnedNotes.indexOf(note);
        this.pinnedNotes.splice(indexOfNote, 1);
        this.add(note);
    }

    //przypinanie/odpinanie notatek
    togglePin(note) {
        if (this.pinnedNotes.includes(note)) {
            this.#unpin(note);
        } else {
            this.#pin(note);
        }
    }

    //zapiswyanie notatek
    saveToStorage() {
        localStorage.setItem("notes", JSON.stringify(this.notes.map(note => note.jSON())));
        localStorage.setItem("pinnedNotes", JSON.stringify(this.pinnedNotes.map(note => note.jSON())));
    }

    //wczytywanie notatek z local storage
    loadFromStorage() {
        const notess = JSON.parse(localStorage.getItem("notes")) ?? [];
        const pinnedNotess = JSON.parse(localStorage.getItem("pinnedNotes")) ?? [];
        notess.forEach(note => {
            this.notes.push(new Note(
                note.date,
                note.color,
                note.text,
                note.title
            ));
        });
        pinnedNotess.forEach(note => {
            this.pinnedNotes.push(new Note(
                note.date,
                note.color,
                note.text,
                note.title
            ));
        });
        addEventListener("change", this.saveToStorage.bind(this));
    }

    getRenderedNotes() {
        return{
            notes: this.notes,
            pinnedNotes: this.pinnedNotes
        }
    }
}
