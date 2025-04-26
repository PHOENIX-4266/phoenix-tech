// Get references to elements
const applyButton = document.getElementById('apply-button');
const loginModal = document.getElementById('login-modal');
const modalOverlay = document.getElementById('modal-overlay');
const closeModal = document.getElementById('close-modal');

// Show the modal when the "Apply" button is clicked
applyButton.addEventListener('click', () => {
  loginModal.style.display = 'block';
  modalOverlay.style.display = 'block';
});

// Close the modal when the "Close" button is clicked
closeModal.addEventListener('click', () => {
  loginModal.style.display = 'none';
  modalOverlay.style.display = 'none';
});

// Close the modal when the overlay is clicked
modalOverlay.addEventListener('click', () => {
  loginModal.style.display = 'none';
  modalOverlay.style.display = 'none';
});