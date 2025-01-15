import { v4 as uuidv4 } from 'uuid';

export const generateRandomNumber = () => {
    // Math.random() * (min - max + 1) + min     
    return Math.floor(Math.random() * (10 - -10 + 1) + -10)
}

const addNotes = (subject, date, text) => {
    const notesArray = JSON.parse(localStorage.getItem("notes")) || [];

    const note = {
        id: uuidv4(),
        subject: subject.value.trim(),
        date: date.value.trim(),
        text: text.value.trim(), 
        rotation: generateRandomNumber(), 
    };
 
    notesArray.push(note)

    
    //storeNotes()
};

export default addNotes