import { Note } from "./note.js";
import { Storage } from "./Storage.js";

let storage = new Storage();

//pobieranie notatek
addEventListener("load", () => {
  const notes = storage.getRenderedNotes();
  notes.notes.forEach(note => {
    renderNote(note);
  });
  notes.pinnedNotes.forEach(note => {
    renderPinned(note);
  });
});

//przypięte notatki
addEventListener("pinNote", (event) => {
  const note = event.detail;
  if (storage.pinnedNotes.includes(note)) {
    renderPinned(note);
  } else {
    renderNote(note);
  }
});

//dodaj notatkę
document.querySelector("#add").addEventListener("click", () => {
  const newNote = new Note();
  storage.add(newNote);
  renderNote(newNote);
});

//notatki
const renderNote = (note) => {
  document.querySelector("#Notes").appendChild(note.note);
}
//przypięte notatki
const renderPinned = (note) => {
  document.querySelector("#Pinned").appendChild(note.note);
}