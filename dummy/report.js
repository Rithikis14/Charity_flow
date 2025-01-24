// JavaScript to handle modal and form submission

// Get elements
const reportBtn = document.getElementById('reportBtn');
const reportModal = document.getElementById('reportModal');
const closeModal = document.getElementById('closeModal');
const reportForm = document.getElementById('reportForm');
const successMessage = document.getElementById('successMessage');

// Open the modal when the "Report" button is clicked
reportBtn.addEventListener('click', function() {
    reportModal.style.display = 'flex';  // Show the modal
});

// Close the modal when the "X" (close button) is clicked
closeModal.addEventListener('click', function() {
    reportModal.style.display = 'none';  // Hide the modal
});

// Close the modal if user clicks outside the modal content
window.addEventListener('click', function(event) {
    if (event.target == reportModal) {
        reportModal.style.display = 'none';  // Hide the modal
    }
});

// Handle form submission
reportForm.addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form from refreshing the page

    // Simulate form submission (you can replace this with actual form submission code)
    setTimeout(function() {
        // Hide the modal
        reportModal.style.display = 'none';
        
        // Show the success message
        successMessage.style.display = 'block';

        // Hide success message after 3 seconds
        setTimeout(function() {
            successMessage.style.display = 'none';
        }, 3000);
    }, 500);  // Simulate delay for report processing
});