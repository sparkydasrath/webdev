console.log("starting app");

const fs = require("fs");
const os = require("os");
const yargs = require("yargs")
const notes = require("./notes");

const argv = yargs.argv;

console.log("Process ", process.argv);
console.log("Args ", argv);

// let command = process.argv[2];
let command = argv._[0];

if (command === "add") {
    notes.addNote(argv.title, argv.body);
} else if (command === "remove") {
    let isRemoved = notes.removeNote(argv.title);
    isRemoved ? console.log(`Note removed: ${argv.title}`) : console.log("note not removed");
} else if (command === "read") {
    let note = notes.getNote(argv.title);
    note === null ? console.log("note note found") : notes.logNote(note);
} else {
    console.log("command not recognized");
}