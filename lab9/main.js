import { Storage } from "./Storage.js";
import { Weather } from "./Weather.js";

let storage = new Storage();

//wczytanie pogody z local storage
addEventListener("load", () => {
  storage.notes.forEach(note => {
    renderNote(note);
  });
});

//przycisk dodania nowego miejsca
document.querySelector("#add").addEventListener("click", function (event) {
  const search = document.querySelector("#Search").value;
  storage.add(new Weather(search));
  renderNote(storage.notes[storage.notes.length - 1]);
});

//tworzenie pogody
const renderNote = (note) => {
  document.querySelector("#Notes").appendChild(note.Weather);
}