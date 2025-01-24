document.getElementById("imageUpload").addEventListener("change", function(event) {
    const imagePreview = document.getElementById("imagePreview");
    const previewImage = document.getElementById("previewImage");

    // Show the preview section
    imagePreview.style.display = "block";

    // Get the file and create a URL to preview it
    const file = event.target.files[0];
    const reader = new FileReader();

    // Load the image and show it
    reader.onload = function(e) {
        previewImage.src = e.target.result;
    };

    if (file) {
        reader.readAsDataURL(file);
    }
});

// Handle form submission
document.getElementById("postForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const caption = document.getElementById("caption").value;
    const file = document.getElementById("imageUpload").files[0];

    if (!file || !caption) {
        alert("Please upload an image and write a caption.");
        return;
    }

    // In a real-world application, you would use an AJAX request to send the form data to the server.
    console.log("Form Submitted!");
    console.log("Caption: ", caption);
    console.log("File: ", file);
});
