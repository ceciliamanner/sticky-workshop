const storeNotes = (notesArray) => {
    localStorage.setItem("notes", JSON.stringify(notesArray));  
};

export default storeNotes; 