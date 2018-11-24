console.log("starting notes");
const fs = require("fs");

let fetchNotes = () => {
    try {
        let notesString = fs.readFileSync("notes-data.json");
        return JSON.parse(notesString);
    } catch (error) {
        return [];
    }
}

let saveNotes = (notes) => {
    fs.writeFileSync("notes-data.json", JSON.stringify(notes));
}

let addNote = (title, body) => {
    let notes = fetchNotes();
    let note = {
        title,
        body
    }

    let duplicateNotes = notes.filter(note => note.title === title);

    if (duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
    }
};

let getAll = () => {
    return notes;
}

let getNote = (title) => {
    let notes = fetchNotes();
    let filteredNotes = notes.filter(n => n.title === title);
    if (filteredNotes.length > 0) return filteredNotes[0];
    else return null;
}

let removeNote = (title) => {
    let notes = fetchNotes();
    let filteredNotes = notes.filter(n => n.title != title);
    saveNotes(filteredNotes);

    return notes.length != filteredNotes.length;
}

let logNote = note => {
    console.log("---");
    console.log(`Title = ${note.title}`);
    console.log(`Body = ${note.body}`);

}

module.exports = {
    addNote,
    getNote,
    removeNote,
    getAll,
    logNote
}