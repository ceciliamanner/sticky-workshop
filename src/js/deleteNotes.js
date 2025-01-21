import renderNotes from "./renderNotes";
import storeNotes from "./storeNotes";

const displayDeleteModal = (subject, id) => {
    const deleteModal = document.querySelector(".delete-modal"); //* notesubject? 
    const deleteMessage = document.querySelector(".delete-modal__text");
    const confirmDeleteButton = document.querySelector(".delete-modal__confirm-button");

    deleteModal.classList.add("display-modal");
    deleteMessage.textContent = `Are you sure you want to delete ${subject}?`;
   
    confirmDeleteButton.addEventListener("click", () => {
        confirmDelete(id);
    }); 
}; 

const closeModal = () => {
    const deleteModal = document.querySelector(".delete-modal");
    deleteModal.classList.remove("display-modal");
}; 

const initializedCloseModal = () => {
    const cancelDeleteButton = document.querySelector(".delete-modal__cancel-button"); 
    cancelDeleteButton.addEventListener("click", closeModal)
}; 
initializedCloseModal();

const confirmDelete = (id) => {
    const notesList = JSON.parse(localStorage.getItem("notes")); 
    const UpdatedArray = notesList.filter((note) => note.id !== id); 
    storeNotes(UpdatedArray);
    renderNotes(); 
    closeModal(); 
};



export {displayDeleteModal, closeModal, initializedCloseModal}; 