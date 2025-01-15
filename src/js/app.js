import addNotes from "./addNotes.js";

// Selecting elements
const form = document.querySelector(".form");
const subjectInput = document.querySelector(".form__subject--input");
const dateInput = document.querySelector(".form__date--input"); 
const noteText = document.querySelector(".form__note--input");

// Add submit element to the form 
form.addEventListener("submit", (e) => {
    e.preventDefault() 
    addNotes(subjectInput, dateInput, noteText); 
}); 