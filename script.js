// Initialize EmailJS
emailjs.init('service_kafe2lp'); // Your EmailJS service ID

// Form submission handler
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    var templateParams = {
        from_name: document.getElementById('name').value,
        from_email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    emailjs.send('service_kafe2lp', 'template_xxx', templateParams) // Replace 'template_xxx' with your EmailJS template ID
        .then(function (response) {
            alert('Message sent successfully!');
        }, function (error) {
            alert('Failed to send message. Please try again.');
        });
});
