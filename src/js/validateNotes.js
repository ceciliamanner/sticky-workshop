const validateNotes = (subject, date, text) => {
    const errorParagraph = document.querySelector(".form__error--text");
    const formattedSubject = subject.value.trim(); 
    const formmatedDate = date.value.trim();
    const formmatedText = text.value.trim(); 

    // Validate subject
    if(!formattedSubject){
        errorParagraph.style.visibility = "visible"; 
        errorParagraph.textContent = "subject is required";
        return false
    }

     // Validate date
     if(!formmatedDate){
        errorParagraph.style.visibility = "visible"; 
        errorParagraph.textContent = "date is required";
        return false
    }

      // Validate text
      if(!formmatedText){
        errorParagraph.style.visibility = "visible"; 
        errorParagraph.textContent = "text is required";
        return false
    }
    // if validation passed, provide a success feedback
    errorParagraph.style.visibility = "visible"; 
    errorParagraph.textContent = "notes submitted successfully 🦋"

    // Hide the success message after 2 seconds 
    setTimeout(() => {
        errorParagraph.style.visibility = ""; 
    },2000); 
    return true; 


};


export default validateNotes; 