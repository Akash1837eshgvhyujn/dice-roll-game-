document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Basic form validation
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    if (!name || !email || !message) {
        alert("Please fill out all fields");
        return;
    }

    // Simulate form submission (you can replace this with actual form submission logic)
    alert("Form submitted!\nName: " + name + "\nEmail: " + email + "\nMessage: " + message);

    // Clear the form after submission
    document.getElementById("contactForm").reset();
});
