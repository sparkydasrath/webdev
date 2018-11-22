console.log("starting notes");

let addNote = (title, body) => {
    console.log("adding note", title, body);
};

let getAll = () => {
    console.log("Getting all notes");
}

module.exports = {
    addNote,
    getAll,
}