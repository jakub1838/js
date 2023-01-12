export class Note {
    constructor(date, color, text, title) {
        this.note = document.createElement("div");
        this.note.classList.add("Note");
        this.createUtility(date, color);
        this.createInput(text, title);
        this.createButtons();
    }

    //tworzenie okienek z inputem
    createInput(text, title) {
        this.title = document.createElement("input");
        this.title.type = "text";
        this.title.classList.add("title");
        this.title.placeholder = "Tytuł";
        this.title.disabled = true;
        this.title.value = title ?? "";
        this.note.appendChild(this.title);

        this.input = document.createElement("input");
        this.input.placeholder = "Wpisz notatke";
        this.input.classList.add("noteInput");
        this.input.toggleAttribute("disabled");
        
        this.input.value = text ?? "";
        this.note.appendChild(this.input);
    }

    //tworzenie wyglądu z datą
    createUtility(date, color) {
        const utility = document.createElement("div");
        utility.classList.add("utility");

        const pin = document.createElement("img");
        pin.src = "../utility/pin-icon.webp";
        pin.addEventListener("click", this.pin.bind(this));
        utility.appendChild(pin);

        this.createDate = date ?? Date.now();
        utility.appendChild(document.createElement("span")).textContent = new Date().toISOString().split('T')[0];

        this.color = document.createElement("input");
        this.color.type = "color";
        this.color.value = color;
        this.color.addEventListener("change", this.setColor.bind(this));
        if (color) {
            this.color.value = color ?? "#ffffff";
            this.setColor(color ?? "#ffffff");
        }
        utility.appendChild(this.color);

        this.note.appendChild(utility);
    }
    
    //tworzenie przycisków 
    createButtons() {
        const buttons = document.createElement("div");
        buttons.classList.add("buttons");

        this.editButton = document.createElement("button");
        this.editButton.innerHTML = "Edytuj";
        this.editButton.addEventListener("click", this.edit.bind(this));
        buttons.appendChild(this.editButton);

        const deleteButton = document.createElement("button");
        deleteButton.innerHTML = "Usuń";
        deleteButton.addEventListener("click", this.remove.bind(this));
        buttons.appendChild(deleteButton);

        this.note.appendChild(buttons);
    }

    //edytowanie notatki
    edit() {
        this.input.toggleAttribute("disabled");
        this.title.toggleAttribute("disabled");
        if (!this.editButton.classList.contains("edit")) {
            this.editButton.classList.add("edit");
            this.editButton.innerHTML = "Zapisz";
        } else {
            this.editButton.innerHTML = "Edytuj";
            this.editButton.classList.remove("edit");
        }
    }

    //usuwanie notatki
    remove() {
        const event = new CustomEvent("removeNote", {detail:this});
        window.dispatchEvent(event);
        this.note.remove();
    }

    //ustawienie koloru
    setColor() {
        this.note.style.backgroundColor = this.color.value;
    }

    //przypięcie notatki
    pin() {
        const event = new CustomEvent("pinNote", {detail:this});
        window.dispatchEvent(event);
    }

    //wpisanie danych
    jSON() {
        return {
            title: this.title.value,
            text: this.input.value,
            date: this.createDate,
            color: this.color.value
        };
    }
}
