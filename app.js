document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("gaikwasp71@gmail.com"); // Replace with your EmailJS user ID

    const getInTouchBtn = document.querySelector("#getInTouchBtn");
    const contactForm = document.querySelector("#contactForm");
    const sendBtn = document.querySelector("#sendBtn");

    getInTouchBtn.addEventListener("click", function (e) {
        e.preventDefault();
        contactForm.style.display = "block";
    });

    sendBtn.addEventListener("click", function (e) {
        e.preventDefault();

        const name = document.querySelector("#name").value;
        const email = document.querySelector("#email").value;
        const message = document.querySelector("#message").value;

        if (!name || !email || !message) {
            alert("Please fill in all the fields.");
            return;
        }

        emailjs.send("service_kafe2lp", "template_fnxh3k9", {
            from_name: name,
            from_email: email,
            message: message
        }).then(function(response) {
            alert("Your message has been sent!");
            contactForm.style.display = "none";
            document.querySelector("#name").value = '';
            document.querySelector("#email").value = '';
            document.querySelector("#message").value = '';
        }, function(error) {
            alert("Failed to send the message.");
        });
    });
});
